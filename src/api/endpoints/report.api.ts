import type { Sample } from "../../interfaces/Types";
import { apiClient } from "../client";

export const reportApi = {
    
    send: async (data: Sample) => {
        
        
        return apiClient.post('/generate-report', data);
        
    },
    
};