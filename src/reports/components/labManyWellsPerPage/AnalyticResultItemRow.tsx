import type { SampleTest } from "../../../types/report.types";

interface AnalyticalResultItemRowProps {
    test: SampleTest;
}

function AnalyticalResultItemRow({ test }: AnalyticalResultItemRowProps) {
    return (
        <div className="w-full grid grid-cols-11 border-b border-gray-300">
            
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal overflow-hidden text-ellipsis">
                {test.analyteName}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.results}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.units}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.df}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.mdl}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.pql}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.method}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.by}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.batch}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1 break-words whitespace-normal">
                {test.note}
            </div>
        </div>
    )
}

export default AnalyticalResultItemRow;