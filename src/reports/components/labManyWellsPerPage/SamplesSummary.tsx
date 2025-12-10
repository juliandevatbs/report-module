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
            <div className="w-11/12 h-60 flex flex-col mt-3 gap-1">
            
                <div className="w-full h-auto bg-[#e6f1ff] border-6 border-[#aed3fc] px-1 py-1 flex">
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Item</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Lab Sample ID</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Client Sample ID</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Collected<br/>Date Time</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Sample Matrix</div>
                    <div className="w-1/6 h-full flex justify-center items-center text-black text-xs">Analysis Requested</div>
                </div>

                {samples.map((sample, index) => (
                    <SamplesSummaryItem 
                        key={index}
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