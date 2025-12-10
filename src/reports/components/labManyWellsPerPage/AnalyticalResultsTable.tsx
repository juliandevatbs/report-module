import type { Sample } from "../../../interfaces/Types";
import AnalyticalResultItem from "./AnalyticalResultItem";
import AnalyticalResultsHeader from "./AnalyticalResultsHeader";

interface AnalyticalResultsTableProps {
    samplesData: Sample[];
}

function AnalyticalResultsTable ( { samplesData }: AnalyticalResultsTableProps ) {

    return (

        <>

            <AnalyticalResultsHeader />

            {samplesData.map((sample, index) => (

                <AnalyticalResultItem key={index} sample={sample} />

            ))}

        </>
        
    )




}

export default AnalyticalResultsTable;