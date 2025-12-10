function HeaderCommon(
    {   
        projectName = "LABS INC", 
        labReceivedDate = "04/07/25 12:43:00",
        companyName = "WSP",
        clientName = "Robert Sheridan",
        clientAddress = "550 NorthLake Blvd. Suite 1000",
        city = "Altamonte Springs",
        state = "FL",
        zip = "31701",
        projectLocation = "NPDES Outfalls",
        clientPhone = "407-522-7570",
        clientProjectNumber = "US0041111.8242.02",
        labReportingBatchID = "2504013"


    }: { 
        projectName: string,
        labReceivedDate: string
        companyName: string,
        clientName: string,
        clientAddress: string,
        city: string,
        state: string,
        zip: string,
        projectLocation: string,
        clientPhone: string,
        clientProjectNumber: string,
        labReportingBatchID: string
    
    }) 
    
    
    {

    return (

        <>

            <div className="w-11/12 h-60  flex flex-col">
                
                {/**Upper section  */}

                <div className="w-full h-1/2  border-b border-4-black flex">
                
                    <div className="w-1/3  h-full flex flex-col pl-3 gap-0.5 py-2 justify-center">
                    
                        <span className="text-xs font-bold text-black">Southern Research Laboratories, Inc</span>
                        <span className="text-xs text-black">279 Douglas Ave, Suite 1110</span>
                        <span className="text-xs text-black">Altamonte Springs, Florida 32714</span>
                        <span className="text-xs text-black">(407)522-7100 / Fax (407)522-7043</span>
                    
                    
                    </div>


                    <div className="w-1/3 h-full   flex flex-col pl-3 gap-0.5 py-2 justify-center items-center">
                    
                        <h2 className="font-bold text-1xl text-black">ANALYTICAL REPORT</h2>
                        <span className="text-xs text-black">For Project:</span>
                        <h2 className="font-bold text-1xl text-black">{ projectName }</h2>
                    
                    </div>
                    <div className="w-1/3 h-full  flex flex-col pl-3 gap-0.5 py-2 justify-center items-center">
                    
                        <span className="text-xs text-black">Nelap Certified</span>
                        <span className="text-xs text-black">FDOH #: <span className="font-bold text-xs text-black">E83484</span></span>
                        <span className="text-xs text-black">Lab Received Date: <span className="font-bold text-xs text-black">{ labReceivedDate }</span></span>

                    </div>

                
                </div>

                <div className="w-full h-1/2 flex border-t border-black">
                    
                    <div className="w-1/2 h-full flex flex-col gap-1 pl-3">
                    
                        <span className="text-xs text-black">Company Name: <span className="text-xs text-black font-bold">{ companyName }</span></span>
                        <span className="text-xs text-black">Client´s Name: <span className="text-xs text-black font-bold">{ clientName }</span></span>
                        <span className="text-xs text-black">Client´s Address: <span className="text-xs text-black font-bold">{ clientAddress }</span></span>
                        <span className="text-xs text-black">City: <span className="text-xs text-black font-bold">{ city }</span></span>
                        <span className="text-xs text-black">State: <span className="text-xs text-black font-bold">{ state }</span></span>
                         <span className="text-xs text-black">Zip: <span className="text-xs text-black font-bold">{ zip }</span></span>
                    
                    </div>
                    <div className="w-1/2 h-full flex flex-col gap-1 pr-3 items-end justify-center">
                    
                        <span className="text-xs text-black">Facility ID: <span className="text-xs text-black font-bold">N.A</span></span>
                        <span className="text-xs text-black">Project Location: <span className="text-xs text-black font-bold">{ projectLocation }</span></span>
                        <span className="text-xs text-black">Client´s Phone: <span className="text-xs text-black font-bold">{ clientPhone }</span></span>
                        <span className="text-xs text-black">Client´s Project Number: <span className="text-xs text-black font-bold">{ clientProjectNumber }</span></span>
                        <span className="text-xs text-black">Lab Reporting Batch ID: <span className="text-xs text-black font-bold">{ labReportingBatchID }</span></span>



                    
                    </div>
                
                </div>

            </div>
        
        
        
        </>

    )


}



export default HeaderCommon;