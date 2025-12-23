import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import type { ApiErrorReference } from "../interfaces/api.type";

class ApiClient {
    
  private client: AxiosInstance;

  constructor() {
    
    this.client = axios.create({
        
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5173',
      
      timeout: 10000,
      
      headers: {
        
        'Content-Type': 'application/json',
        
      },
      
    });
    

    this.setupInterceptors();
    
  }

  private setupInterceptors() {
    
    // Request interceptor
    
    this.client.interceptors.request.use(
        
      (config) => {
        
        console.log('Request:', config.method?.toUpperCase(), config.url);
        
        return config;
        
      },
      (error) => {
        
        console.error('Request Error:', error);
        
        return Promise.reject(error);
        
      }
    );

    // Response interceptor
    
    this.client.interceptors.response.use(
        
      (response) => {
        
        console.log('Response:', response.status, response.config.url);
        
        return response;
        
      },
      
      (error: AxiosError<ApiErrorReference>) => {
        
        console.error('Response Error:', error.response?.status, error.message);
        
        const apiError = {
            
          message: error.response?.data?.message || error.message || 'Error desconocido',
          
          status: error.response?.status || 500,
          
          details: error.response?.data,
          
        };
        
        return Promise.reject(apiError);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    
    const response = await this.client.get<T>(url, config);
    
    return response.data;
    
  }

  async post<T>(url: string, data?: ApiErrorReference, config?: AxiosRequestConfig) {
    
    const response = await this.client.post<T>(url, data, config);
    
    return response.data;
    
  }

  async put<T>(url: string, data?: ApiErrorReference, config?: AxiosRequestConfig) {
    
    const response = await this.client.put<T>(url, data, config);
    
    return response.data;
    
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    
    const response = await this.client.delete<T>(url, config);
    
    return response.data;
    
  }

  async patch<T>(url: string, data?: ApiErrorReference, config?: AxiosRequestConfig) {
    
    const response = await this.client.patch<T>(url, data, config);
    
    return response.data;
    
  }
  
}

export const apiClient = new ApiClient();