import { AxiosError } from "axios"

export enum ApiErrorType {
  NETWORK = 'NETWORK',
  TIMEOUT = 'TIMEOUT',
  SERVER = 'SERVER',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  VALIDATION = 'VALIDATION',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  UNKNOWN = 'UNKNOWN'
}


export type ApiErrorResponse = {
  errorType: ApiErrorType,
  status?: number
  message: string,
  details?: any,
  path?: string,
  timestamp?: string
  requestId?: string
}



export class ErrorHandler {

  //any private memebers like apilogger 
  constructor() {

    //instaniating the private members in the construct 
  }



  public hanldeApiError(error: AxiosError | {
    response?: {
      status?: number,
      data?: any,
      config?: any,
      headers?: any
    },
    message: string,
    code?: string,
    isAxiosError?: boolean,
    originalStatus?: number

  }): ApiErrorResponse {


    let errorResponse: ApiErrorResponse;

    const status =  error?.response?.status
    const data = error.response?.data
    const message = error.message
    const config = error.response?.config || (error as any).config
    const requestHeaders = error.response?.headers;
    const requestId = requestHeaders?.['x-request-id'] || requestHeaders?.['X-Request-ID'] || config?.headers?.['X-Request-ID'] || 'unknown';


    if (message == 'Network Error' || !error.response || status == 0) {
      errorResponse = {
        errorType: ApiErrorType.NETWORK,
        message: "NETWORK_ERROR_MESSAGE",
        path: config?.url,
        requestId,
        timestamp: new Date().toISOString(),
      };
      //this.notifyUser(erroResponse)
      return errorResponse
    }


    if (error.code === 'ECONNABORTED' || message.includes('timeout')) {
      errorResponse = {
        errorType: ApiErrorType.TIMEOUT,
        status,
        message: "TIMEOUT_ERROR_MESSAGE",
        path: config?.url,
        requestId,
        timestamp: new Date().toISOString(),
      };

      return errorResponse;
    }

    switch (status) {
       case 400:
         errorResponse = {
           errorType: ApiErrorType.VALIDATION,
           status,
           message: this.extractErrorMessage(data) || 'Invalid request data.',
           details: data,
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
         // Validation errors details might be shown inline in forms,
         break;
 
       case 401: 
         errorResponse = {
           errorType: ApiErrorType.AUTHENTICATION,
           status,
           message: "AUTH_REQUIRED_MESSAGE", 
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
         // 401 is often handled by the token refresh logic in the base query.
         // We might notify the user *only* if the refresh attempt itself fails.
         // The baseQueryWithReauth handles calling logout and potentially notifying.
         // So, we might not notify here, or notify only if the error is the final result after retry.
         // This depends on how the baseQueryWithReauth is structured.
         // For now, the baseQueryWithReauth handles the final notification on refresh failure.
         break;
 
       case 403: // Forbidden
         errorResponse = {
           errorType: ApiErrorType.AUTHORIZATION,
           status,
           message: "PERMISSION_DENIED_MESSAGE",
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
         break;
 
       case 404: 
         errorResponse = {
           errorType: ApiErrorType.NOT_FOUND,
           status,
           message: 'Resource not found.',
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
         //  we have  handle 404 specifically from ui no page found
         break;
 
       case 409: 
         errorResponse = {
             errorType: ApiErrorType.CONFLICT,
             status,
             message: this.extractErrorMessage(data) || 'A conflict occurred with the resource.',
             details: data,
             path: config?.url,
             requestId,
             timestamp: new Date().toISOString(),
         };
         break;
 
       case 429: // Too Many Requests
          errorResponse = {
             errorType: ApiErrorType.TOO_MANY_REQUESTS,
             status,
             message: this.extractErrorMessage(data) || 'Too many requests. Please try again later.',
             details: data,
             path: config?.url,
             requestId,
             timestamp: new Date().toISOString(),
         };
         this.notifyUser(errorResponse);
         break;
 
 
       case 500: // Internal Server Error
       case 502: // Bad Gateway
       case 503: // Service Unavailable
       case 504: // Gateway Timeout
         errorResponse = {
           errorType: ApiErrorType.SERVER,
           status,
           message: "GENERIC_ERROR_MESSAGE",
           details: data,
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
         break;
 
       default: // Other unexpected HTTP error statuses
         errorResponse = {
           errorType: ApiErrorType.UNKNOWN,
           status,
           message: this.extractErrorMessage(data) || "GENERIC_ERROR_MESSAGE",
           details: data,
           path: config?.url,
           requestId,
           timestamp: new Date().toISOString(),
         };
        //  this.notifyUser(errorResponse); 
          // if (Constants.IS_PRODUCTION || Constants.IS_STAGING) {
          //     this.reportToMonitoring(errorResponse, error);
          // }
     }


     return errorResponse


  }


  private extractErrorMessage(data: any): string | null {
    if (!data) return null;

    if (typeof data === 'string') return data;

    // Handle common nested error structures
    //it depend on our api sturcutre will change afterwards
    if (typeof data === 'object' && data !== null) {
        return data.message ||
               data.error?.message ||
               data.error || 
               (Array.isArray(data.errors) && data.errors.length > 0 && data.errors[0].message) ? data.errors[0].message : null;

    }


    return null; 
  }




  public notifyUser(error: ApiErrorResponse): void {
    console.log("notifiying user")
  }


  private reportToMonitoring(errorResponse: ApiErrorResponse, originalError: any): void {
    console.log("report to any loggin service")
    //todo : implement any frontend logging service like sentry 

  }


}