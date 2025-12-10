import type { Sample } from "../../interfaces/Types";
import Footer from "../components/common/Footer";
import HeaderCommon from "../components/common/HeaderCommon";
import AnalyticalResultsTable from "../components/labManyWellsPerPage/AnalyticalResultsTable";
import DetectionSummaryTable from "../components/labManyWellsPerPage/DetectionSummaryTable";
import Header from "../components/labManyWellsPerPage/Header";
import SamplesSummary from "../components/labManyWellsPerPage/SamplesSummary";
import ReportPage from "../components/ReportPage";

function LabManyWellsPerPage ({ 

    clientNameOrg,

}: { 
    clientNameOrg: string,

}) {

    const projectData = {
        projectName: "LABS INC",
        labReceivedDate: "04/07/25 12:43:00",
        companyName: "WSP",
        clientName: "Robert Sheridan",
        clientAddress: "550 NorthLake Blvd. Suite 1000",
        city: "Altamonte Springs",
        state: "FL",
        zip: "31701",
        projectLocation: "NPDES Outfalls",
        clientPhone: "407-522-7570",
        clientProjectNumber: "US0041111.8242.02",
        labReportingBatchID: "2504013"
    };


    const samplesData = [
        {
            labSampleId: "LAB-001",
            clientSampleId: "CLIENT-001",
            collectedDateTime: "04/07/25 12:43:00",
            sampleMatrix: "Water",
            analysisRequested: "pH, Conductivity"
        },
        {
            labSampleId: "LAB-002",
            clientSampleId: "CLIENT-002",
            collectedDateTime: "04/07/25 13:00:00",
            sampleMatrix: "Soil",
            analysisRequested: "Heavy Metals"
        }
    ];

    const samplesDataTW: Sample[] = [
    {
        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    },
    {
        clientSampleId: "MW-02",
        labSampleId: "2504013-002",
        dateCollected: "04/07/25 10:30:00",
        collectedBy: "Sarah Chen",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "Lead",
                analyteId: "PB-7439",
                results: "2.5",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            },
            {
                analyteName: "Arsenic",
                analyteId: "AS-7440",
                results: "3.8",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            },
            {
                analyteName: "Chromium",
                analyteId: "CR-7440",
                results: "1.2",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            }
        ]
    },
    {
        clientSampleId: "MW-03",
        labSampleId: "2504013-003",
        dateCollected: "04/07/25 11:45:00",
        collectedBy: "Mike Thompson",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "Benzene",
                analyteId: "BZ-71432",
                results: "< 0.5",
                units: "μg/L",
                df: "1",
                mdl: "0.2",
                pql: "0.5",
                method: "EPA 8260D",
                analyzedDate: "04/10/25",
                by: "DW",
                batch: "B2504-03",
                note: "U"
            },
            {
                analyteName: "Toluene",
                analyteId: "TOL-108",
                results: "1.8",
                units: "μg/L",
                df: "1",
                mdl: "0.2",
                pql: "0.5",
                method: "EPA 8260D",
                analyzedDate: "04/10/25",
                by: "DW",
                batch: "B2504-03",
                note: ""
            },
            {
                analyteName: "Xylenes, Total",
                analyteId: "XYL-1330",
                results: "< 0.5",
                units: "μg/L",
                df: "1",
                mdl: "0.3",
                pql: "0.5",
                method: "EPA 8260D",
                analyzedDate: "04/10/25",
                by: "DW",
                batch: "B2504-03",
                note: "U"
            }
        ]
    },
    {
        clientSampleId: "SW-01",
        labSampleId: "2504013-004",
        dateCollected: "04/07/25 13:20:00",
        collectedBy: "Emily Rodriguez",
        matrixId: "Surface Water",
        sampleTests: [
            {
                analyteName: "Nitrate as N",
                analyteId: "NO3-14797",
                results: "5.6",
                units: "mg/L",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 353.2",
                analyzedDate: "04/08/25",
                by: "TC",
                batch: "B2504-04",
                note: ""
            },
            {
                analyteName: "Phosphorus, Total",
                analyteId: "P-7723",
                results: "0.85",
                units: "mg/L",
                df: "1",
                mdl: "0.05",
                pql: "0.1",
                method: "EPA 365.1",
                analyzedDate: "04/08/25",
                by: "TC",
                batch: "B2504-04",
                note: ""
            },
            {
                analyteName: "BOD, 5-day",
                analyteId: "BOD-001",
                results: "12.5",
                units: "mg/L",
                df: "1",
                mdl: "2",
                pql: "2",
                method: "SM 5210B",
                analyzedDate: "04/12/25",
                by: "AM",
                batch: "B2504-04",
                note: ""
            }
        ]
    },
    {
        clientSampleId: "SW-02",
        labSampleId: "2504013-005",
        dateCollected: "04/07/25 14:50:00",
        collectedBy: "David Park",
        matrixId: "Surface Water",
        sampleTests: [
            {
                analyteName: "E. coli",
                analyteId: "ECOLI-001",
                results: "75",
                units: "MPN/100mL",
                df: "1",
                mdl: "1",
                pql: "1",
                method: "SM 9223B",
                analyzedDate: "04/09/25",
                by: "KL",
                batch: "B2504-05",
                note: ""
            },
            {
                analyteName: "Total Coliform",
                analyteId: "TCOLI-001",
                results: "240",
                units: "MPN/100mL",
                df: "1",
                mdl: "1",
                pql: "1",
                method: "SM 9223B",
                analyzedDate: "04/09/25",
                by: "KL",
                batch: "B2504-05",
                note: ""
            },
            {
                analyteName: "Turbidity",
                analyteId: "TURB-001",
                results: "3.5",
                units: "NTU",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 180.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-05",
                note: ""
            }
        ]
    }, {

        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    }
    ];

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

            {/* Página 1 - Samples Summary */}
            <ReportPage 
                pageNumber={1} 
                totalPages={totalPages}
                clientName={clientNameOrg}
                projectData={projectData}
            >
                <SamplesSummary samples={samplesData} />
            </ReportPage>

            {/* Página 2 - Analytical Results */}
            <ReportPage 
                pageNumber={2} 
                totalPages={totalPages}
                clientName={clientNameOrg}
                projectData={projectData}
                showHeader={false} // Solo mostrar el header común
            >
                <AnalyticalResultsTable samplesData={samplesDataTW} />
            </ReportPage>

            {/* Página 3 - Detection Summary */}
            <ReportPage 
                pageNumber={3} 
                totalPages={totalPages}
                clientName={clientNameOrg}
                projectData={projectData}
                showHeader={false}
            >
                <DetectionSummaryTable samplesData={samplesDataTW} />
            </ReportPage>
        </>
    );
}

export default LabManyWellsPerPage;