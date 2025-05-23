
export type UserRole = "admin" | "student" | "teacher" | "guest";


export type User = {
    id: string,
    name: string,
    email: string,
    role: UserRole[]
}


export type LoginResponse = {
    user: User
}

export type LoginRequest = {
    email: string,
    password: string
}
export interface RegisterRequest {
    name: string,
    email: string,
    password: string,
}

