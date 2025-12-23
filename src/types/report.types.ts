export interface PaginatedSample {
    sample: Sample;
    tests: SampleTest[];
    isFirstPage: boolean;
    isContinuation: boolean;
}

export interface HeaderCommonProps {
    
    projectName?: string;
    labReceivedDate?: string;
    companyName?: string;
    clientName?: string;
    clientAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
    projectLocation?: string;
    clientPhone?: string;
    clientProjectNumber?: string;
    labReportingBatchID?: string;
}

    


export interface ProjectData {
  LabReportingBatchID?: string;
  ProjectName?: string;
  ProjectLocation?: string;
  ClientProjectNumber?: string;
  Contact?: string;
  Phone?: string;
  Address_1?: string;
  City?: string;
  State_Prov?: string;
  Postal_Code?: string;
}

export interface SampleSummary {
  itemID: string;
  labSampleId: string;
  clientSampleId: string;
  collectedDateTime: string;
  sampleMatrix: string;
  analysisRequested: string;
}

export interface SampleTest {
    analyteName: string;
    analyzedDate: string;
    analyteId?: string;
    results: string | number | null;
    units: string | null;
    df: string | number | null;
    mdl: string | number | null;
    pql: string | number | null;
    method: string | null;
    by: string | null;
    batch: string | null;
    note: string | null;
}


export interface Sample {
    
    clientSampleId: string;
    labSampleId: string;
    dateCollected: string;
    collectedBy: string;
    matrixId: string;
    sampleTests: SampleTest[];
    
    
    
}


export interface QualityControl {
    
    clientSampleId: string;
    labSampleId: string;
    dateCollected: string;
    collectedBy: string;
    matrixId: string;
    sampleTests: SampleTest[];

}





export interface ReportResponse {
    
    success: boolean;
    batch_id: number;
    project_data: ProjectData[];           
    samples_data: SampleSummary[];         
    samples_tw: Sample[];          
    quality_controls: QualityControl[];  
    timestamp?: string;
    error?: string;
    
    
}


export interface UseReportDataReturn {
  data?: ReportResponse | null;
  loading?: boolean;
  error?: string | null;
}