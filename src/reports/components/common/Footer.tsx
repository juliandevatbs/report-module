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
            
                <div className="w-4/12 h-auto border-t-2 border-black flex flex-col">
                
                    <span className="font-bold text-sm text-black">Saul Roa</span>
                    <span className="text-xs text-black">Vice President / Quality Assurance Officer - S</span>
                
                </div>
            
            </div>
            <div className="w-full h-1/2 flex border-t-2 border-black mt-1">
            
                <div className="w-1/4 flex flex-col justify-center items-center text-xs text-black">{ currentDate }</div>
                <div className="w-2/4 flex flex-col justify-center items-center">
                
                    <span className="text-[10px] text-black">This report, which includes the attached Chain-Of-Custody, shall not be</span>
                    <span className="text-[10px] text-black">reported except in full, without written approval of the laboratory</span>

                </div>
                <div className="w-1/4 flex flex-col justify-center items-center">

                    { pageNumber && totalPages && (


                        <span className="font-semibold">Page {pageNumber} of {totalPages}</span>


                    ) }

                

                </div>
            
            </div>
        
        </div>

    )

}


export default Footer;