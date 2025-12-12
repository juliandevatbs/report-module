export interface Samples {


    labSampleID: string;
    clientSampleID: string;
    collectedDateTime: string;
    sampleMatrix: string;
    analysisRequested: string;
    collectedBy: string;
    matrixId: string;
    sampleTests: SampleTests[];
}


export interface SampleTests {

    analyteName: string;
    result: number;
    units: string;
    df: number;
    mdl: number;
    pql: number;
    method: string;
    analyzedDate: string;
    by: string;
    batch: string;
    notes: string;


}