import type { PaginatedSample } from "../../utils/paginateSamples";

import AnalyticalResultItemHeader from "./AnalyticalResultItemHeader";

import AnalyticResultItemRow from "./AnalyticResultItemRow";

import ClassicalParametersHeader from "./ClassicalParameters";


interface AnalyticalResultItemPaginatedProps {

    paginatedSample: PaginatedSample;

}


function AnalyticalResultItemPaginated({ paginatedSample }: AnalyticalResultItemPaginatedProps) {


    const { sample, tests, isFirstPage, isContinuation } = paginatedSample;


    return (


        <div className="w-11/12 h-auto flex flex-col border-l-2 border-r-2 border-black">


            {isFirstPage && (

                <>

                    <div className="w-full h-auto flex px-0.5 bg-[#e6f1ff]">

                        <div className="w-1/3 h-full flex flex-col">


                            <span className="text-xs text-black">Client Sample ID: <span className="font-bold">{sample.clientSampleId}</span></span>

                            <span className="text-xs text-black">Lab Sample ID: <span className="font-bold">{sample.labSampleId}</span></span>


                        </div>


                        <div className="w-1/3 h-full flex flex-col">

                        

                            <span className="text-xs text-black">Date Collected: <span className="font-bold">{sample.dateCollected}</span></span>

                            <span className="text-xs text-black">Collected By: <span className="font-bold">{sample.collectedBy}</span></span>


                        </div>

                        <div className="w-1/3 h-full flex flex-col">

                        

                            <span className="text-xs text-black">Matrix ID: <span className="font-bold">{sample.matrixId}</span></span>


                        </div>


                    </div>


                    <ClassicalParametersHeader />

                    <AnalyticalResultItemHeader />

                </>

            )}


            {isContinuation && (

                <>

                    <div className="w-full h-auto flex px-0.5 bg-[#fff3cd] border-t-2 border-black">

                        <span className="text-xs text-black italic font-semibold">Continued: {sample.clientSampleId} - {sample.labSampleId}</span>

                    </div>


                    <ClassicalParametersHeader />

                    <AnalyticalResultItemHeader />

                </>

            )}


            {tests.map((test, index) => (

                <AnalyticResultItemRow key={index} test={test} />

            ))}


        </div>


    );

}


export default AnalyticalResultItemPaginated;