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
            <div className="w-full h-8 px-1 py-1 flex">
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{itemNumber}</div>
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{labSampleId}</div>
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{clientSampleId}</div>
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{collectedDateTime}</div>
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{sampleMatrix}</div>
                <div className="w-1/6 flex justify-center items-center text-black text-xs">{analysisRequested}</div>
            </div>
        </>
    )
}

export default SamplesSummaryItem;