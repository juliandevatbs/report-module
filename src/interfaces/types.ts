export interface SampleTest {
    analyteName: string;
    results: string;
    units: string;
    df: string;
    mdl: string;
    pql: string;
    method: string;
    analyzedDate: string;
    by: string;
    batch: string;
    note: string;
}

export interface Sample {
    clientSampleId: string;
    labSampleId: string;
    dateCollected: string;
    collectedBy: string;
    matrixId: string;
    sampleTests: SampleTest[];
}

export interface ReportClient {
    
    batch_id: string;
    
    
    
}
