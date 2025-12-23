interface SamplesSummaryItemProps {
    itemNumber: number;
    labSampleId: string;
    clientSampleId: string;
    collectedDateTime: string;
    sampleMatrix: string;
    analysisRequested: string;
}

function SamplesSummaryItem ({ 
    itemNumber, 
    labSampleId, 
    clientSampleId, 
    collectedDateTime, 
    sampleMatrix, 
    analysisRequested 
}: SamplesSummaryItemProps) {

    return (
        <>
            <div className="w-full px-1 py-1 flex items-center">
                
                <div className="w-1/8 flex justify-center items-center text-black text-[10px]">
                    {itemNumber}
                </div>
                
                <div className="w-1/6 flex justify-center items-center text-black text-[10px]">
                    {labSampleId}
                </div>
                <div className="w-1/6 flex justify-center items-center text-black text-[10px]">
                    {clientSampleId}
                </div>
                <div className="w-1/6 flex justify-center items-center text-black text-[10px]">
                    {collectedDateTime}
                </div>
                <div className="w-1/6 flex justify-center items-center text-black text-[10px]">
                    {sampleMatrix}
                </div>
                <div className="w-2/6 text-black text-[10px] leading-snug break-words whitespace-normal text-center">
                    {analysisRequested}
                </div> 
                           
            </div>
        </>
    )
}

export default SamplesSummaryItem;