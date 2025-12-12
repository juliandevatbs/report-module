import type { AxiosInstance } from "axios";
import axios from "axios";

class ApiClient {

    private client: AxiosInstance;


    constructor() {

        this.client = axios.create({

            baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5173/generate-report',
            timeout: 10000,

            
        })


    }


}