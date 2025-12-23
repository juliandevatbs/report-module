import SamplesSummaryItem from "../common/SamplesSummaryItem";

interface SampleData {
    labSampleId: string;
    clientSampleId: string;
    collectedDateTime: string;
    sampleMatrix: string;
    analysisRequested: string;
}

interface SamplesSummaryProps {
    samples: SampleData[];
}

function SamplesSummary ({ samples }: SamplesSummaryProps) {

    return (
        <>
            <div className="w-11/12 h-52 flex flex-col mt-3">
            
                <div className="w-full h-auto bg-[#e6f1ff] border-6 border-[#aed3fc] px-1 py-1 flex font-bold">
                    <div className="w-1/8 h-full flex justify-center items-center text-black text-[10px] text-center">Item</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-[10px] text-center">Lab Sample ID</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-[10px] text-center">Client Sample ID</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-[10px] text-center">Collected<br/>Date Time</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-[10px] text-center">Sample Matrix</div>
                    <div className="w-2/6 h-full flex justify-center items-center text-black text-[10px] text-center">Analysis Requested</div>
                </div>
                
                    
                    {samples.map((sample, index) => (
                    <SamplesSummaryItem 
                        itemNumber={index + 1}
                        labSampleId={sample.labSampleId}
                        clientSampleId={sample.clientSampleId}
                        collectedDateTime={sample.collectedDateTime}
                        sampleMatrix={sample.sampleMatrix}
                        analysisRequested={sample.analysisRequested}
                    />
                ))}
                    
                    
                    


                

            </div>
        </>
    )
}

export default SamplesSummary;