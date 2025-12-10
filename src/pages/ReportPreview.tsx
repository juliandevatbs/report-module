import LabManyWellsPerPage from "../reports/templates/LabManyWellsPerPage";

function ReportPreview ({ clientNameMain = "Julian Homez" }: { clientNameMain: string }) {


    return(

        <>

            <div className="w-full  bg-white flex flex-col items-center">
            
            
                <LabManyWellsPerPage 
                
                    clientNameOrg={clientNameMain}
                
                
                />



            
            
            </div>
        
            
        
        </>

    )


}

export default ReportPreview;