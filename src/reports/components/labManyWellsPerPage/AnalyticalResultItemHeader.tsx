function AnalyticalResultItemHeader () {

    return(
        <div className="w-full h-auto grid grid-cols-11 border-t border-b border-black">

            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Analyte Name (Analyte ID)
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Results/Qual
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Units
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                DF
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                MDL
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                PQL
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Method
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Analyzed Date
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                By
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Batch
            </div>
            <div className="col-span-1  text-[10px] text-black flex items-center justify-center text-center px-1">
                Notes
            </div>

        </div>
    )
}

export default AnalyticalResultItemHeader;