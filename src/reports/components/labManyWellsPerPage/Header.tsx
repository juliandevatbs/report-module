function Header({ clientName }: { clientName: string }) {

    return (

        <>

            <div className="w-11/12 h-auto flex flex-col items-center gap-1.5">



                <div className="w-full h-32  pl-3.5 flex items-start">
                
                    <img src="src\assets\LOGO_SRL_FINAL.png" className="w-24"/>

                
                </div>

                <div></div>


                <div className="w-full h-auto bg-[#e6f1ff] border-6 border-[#aed3fc] px-1.5 py-1 flex flex-col gap-0.5">

                    <span className="font-bold  text-[10px] text-black">
                        Thank you {clientName} for the opportunity to be of service
                        to you and your company. We sincerely Appreciate Your Business.
                    </span>


                    <span className="text-[10px] text-black">
                        SRL certifies these Laboratory Results were produced in accordance
                        with NELAC Standards. Hold times and presevation requirements were met for
                        all analytes unless specifically call noted in the report. Results relate
                        only to the samples as received. 
                    </span>


                
                </div>
                
            
            
            
            </div>

            


        </>


    )


}


export default Header;