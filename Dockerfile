# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies (separate layer for caching)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM nginx:1.25-alpine

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# Expose port 80 (HTTP)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]