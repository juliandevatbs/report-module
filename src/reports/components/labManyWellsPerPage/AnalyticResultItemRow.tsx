// AnalyticalResultItemRow.tsx

import type { SampleTest } from "../../../interfaces/Types";

interface AnalyticalResultItemRowProps {

    test: SampleTest;

}

function AnalyticalResultItemRow({ test }: AnalyticalResultItemRowProps) {


    return (
        
        <div className="w-full h-auto grid grid-cols-11 border-b border-gray-300">

            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.analyteName} ({test.analyteId})
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.results}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.units}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.df}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.mdl}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.pql}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.method}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.analyzedDate}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.by}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.batch}
            </div>
            <div className="col-span-1 text-[10px] text-black flex items-center justify-center text-center px-1 py-1">
                {test.note}
            </div>

        </div>
    )
}

export default AnalyticalResultItemRow;