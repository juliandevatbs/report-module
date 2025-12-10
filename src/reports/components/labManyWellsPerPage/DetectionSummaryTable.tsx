import type { Sample } from "../../../interfaces/Types";

import DetectionSummaryHeader from "./DetectionSummaryHeader";
import DetectionSummaryResultItem from "./DetectionSummaryResultItem";



interface DetectionSummaryResultsTableProps {

    samplesData: Sample[];

}


function DetectionSummaryTable({ samplesData }: DetectionSummaryResultsTableProps ) {


    return (


        <div className="w-11/12 h-auto flex flex-col">


            <DetectionSummaryHeader />


            {samplesData.map((sample, index) => (

                <DetectionSummaryResultItem 

                    key={index} 

                    sample={sample} 

                />

            ))}


        </div>


    )


}


export default DetectionSummaryTable;