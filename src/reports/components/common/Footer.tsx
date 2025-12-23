import getCurrentDateTime from "../../utils/GetTodayDate";


interface FooterProps {

    pageNumber?: number;
    totalPages?: number;

}

function Footer({ pageNumber, totalPages }: FooterProps ) {

    const currentDate = getCurrentDateTime();


    return (

        <div className="w-11/12 h-auto flex flex-col py-1">
        
            <div  className="w-full h-1/2">
            
                <div className="w-4/12 h-auto border-t-2 border-black flex flex-col pl-2 pt-1">
                
                    <span className="font-bold text-xs text-black">Saul Roa</span>
                    <span className="text-[10px] text-black">Technical Manager / Quality Assurance Officer</span>
                
                </div>
            
            </div>
            <div className="w-full h-1/2 flex border-t-2 border-black mt-1">
            
                <div className="w-1/4 flex flex-col justify-center items-center text-[10px] text-black">{ currentDate }</div>
                <div className="w-2/4 flex flex-col justify-center items-center">
                
                    <span className="text-[8px] text-black">This report, which includes the attached Chain-Of-Custody, shall not be</span>
                    <span className="text-[8px] text-black">reported except in full, without written approval of the laboratory</span>

                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">

                    { pageNumber && totalPages && (


                        <span className="font-semibold text-[10px]">Page {pageNumber} of {totalPages}</span>


                    ) }
            
                </div>
            
            </div>
        
        </div>

    )

}


export default Footer;