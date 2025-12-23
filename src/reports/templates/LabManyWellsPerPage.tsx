import useReportData from "../../hooks/useReportData";
import type { Sample, SampleSummary } from "../../types/report.types";
import AnalyticalResultsTable from "../components/labManyWellsPerPage/AnalyticalResultsTable";
import DetectionSummaryTable from "../components/labManyWellsPerPage/DetectionSummaryTable";
import SamplesSummary from "../components/labManyWellsPerPage/SamplesSummary";
import ReportPage from "../components/ReportPage";

function LabManyWellsPerPage() {
  
  const { data, loading, error } = useReportData();
  
  const apiData = data?.project_data[0];
  
  const clientNameOrg = apiData?.Contact ?? "";
  

  if (loading) {
    
    return (
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", gap: "20px" }}>
        
        <div style={{ width: "50px", height: "50px", border: "5px solid #f3f3f3", borderTop: "5px solid #3498db", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        
        <p>Loading report data...</p>
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", gap: "20px", backgroundColor: "#fee", padding: "20px" }}>
        <h2 style={{ color: "#c00" }}>Error Loading Report</h2>
        <p>{error || "No data available"}</p>
        <button onClick={() => window.location.reload()} style={{ padding: "10px 20px", backgroundColor: "#c00", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Retry
        </button>
      </div>
    );
  }

  const projectData = {
    projectName: apiData?.ProjectName ?? "",
    labReceivedDate: "", 
    companyName: "", 
    clientName: apiData?.Contact ?? "",
    clientAddress: apiData?.Address_1 ?? "",
    city: apiData?.City ?? "",
    state: apiData?.State_Prov ?? "",
    zip: apiData?.Postal_Code ?? "",
    projectLocation: apiData?.ProjectLocation ?? "",
    clientPhone: apiData?.Phone ?? "",
    clientProjectNumber: apiData?.ClientProjectNumber ?? "",
    labReportingBatchID: data.batch_id?.toString() ?? ""
};

  const samplesData: SampleSummary[] = data.samples_data ?? [];
  const samplesDataTW: Sample[] = data.samples_tw ?? [];
  const totalPages = 3 + samplesDataTW.length;

  return (
    <>
      <style>{`
        @media print {
          .page-break {
            page-break-after: always;
          }
        }
      `}</style>

      <ReportPage pageNumber={1} totalPages={totalPages} clientName={clientNameOrg} projectData={projectData}>
        <SamplesSummary samples={samplesData} />
      </ReportPage>

      <ReportPage pageNumber={2} totalPages={totalPages} clientName={clientNameOrg} projectData={projectData} showHeader={false}>
        <AnalyticalResultsTable samplesData={samplesDataTW} />
      </ReportPage>

      <ReportPage pageNumber={3} totalPages={totalPages} clientName={clientNameOrg} projectData={projectData} showHeader={false}>
        <DetectionSummaryTable samplesData={samplesDataTW} />
      </ReportPage>
    </>
  );
}

export default LabManyWellsPerPage;