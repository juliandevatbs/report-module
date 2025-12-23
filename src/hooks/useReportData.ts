import { useEffect, useState } from "react";
import type { ReportResponse, UseReportDataReturn } from "../types/report.types";

const useReportData = (): UseReportDataReturn => {
  const [data, setData] = useState<ReportResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReport = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/get-report/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ReportResponse = await response.json();
        
        if (result.success) {
          setData(result);
        } else {
          throw new Error(result.error || 'Failed to load report');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        console.error('[Report Error]', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  return { data, loading, error };
};

export default useReportData;