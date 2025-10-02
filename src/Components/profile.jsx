export default function Profile(){
   return(
     <div>
            <div className="w-full flex flex-col sm:flex-row h-fit">
               <div className="bg-blue-600 w-full sm:w-[40%] flex flex-col justify-center text-white p-8  sm:items-center lg:items-start">
                    
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
                        Our Latest Project
                     </h2>
                    
                     <p className="mb-6 text-gray-200 text-sm md:text-base text-center">
                        Image from Freepik
                     </p>



                  <div className="w-full flex justify-center lg:justify-start ">
                       <a
                        href="#"
                        className="px-6 py-2  md:px-8 md:py-3 border-2 border-white rounded-full font-semibold tracking-wide hover:bg-white hover:text-blue-600 transition"
                     >
                        Read More
                     </a>
                  </div>
                    
                   
               </div> 

               <div className="w-full sm:w-[60%] ">
                  
                  <img
                     src="/meeting.jpg"
                     className="h-64 sm:h-[490px] w-full object-cover"
                     alt="Project Meeting"
                  />
               </div>
         </div>
     </div>
   ) 
}