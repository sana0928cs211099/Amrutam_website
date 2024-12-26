import 'react'

const Consult = () => {
  return (
    <div className=" p-4 md:p-16 lg:p-10 lg:px-40 bg-[#f8f3e7]">
          {/* desktop version */}
           <div className="hidden 2xl:block ">
            <h1 className="text-center underline underline-offset-1 decoration-4 decoration-zinc-400  text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mt-10 mb-16">
                What sets Ayurvedic consultations apart?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">

                <div className="bg-white p-4 lg:[28vh] xl:h-[28vh] 2xl:h-[28vh] transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <h2 className="text-center text-3xl font-bold text-green-800 mt-6">
                        स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
                    </h2>
                    <p className="text-center text-lg text-gray-600 p-6">
                        [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                    </p>
                </div>

                <div className="rounded-2xl h-[28vh] w-[27vw] transition-transform duration-300 hover:scale-110 shadow-md">
                    <img src="https://www.mtvhustle.com/wp-content/uploads/2023/06/amrutam-shark-tank-india-2.jpg" alt="Two people discussing Ayurvedic treatment" className="rounded-2xl h-[28vh] w-[27vw]"/>   
                </div>

                <div className="bg-white p-4 h-[28vh] transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <h2 className="text-left p-3 text-3xl mt-4 font-bold text-green-800 ">
                        Precise Diagnosis
                    </h2>
                    <p className="text-left p-2 text-lg text-gray-600">
                        Ayurveda`s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                    </p>
                </div>
             </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-10" >

                <div className="bg-white p-4 h-[28vh] w-[20vw] transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <h2 className="text-center p-3 text-3xl mt-6 font-bold text-green-800">
                        Zero side-effects
                    </h2>
                    <p className="text-left ml-3 p-2 text-lg text-gray-600">
                        Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.
                    </p>
                </div>

                <div className="rounded-2xl h-[28vh] w-[20vw] transition-transform duration-300 hover:scale-110 shadow-md">
                    <img src="https://th.bing.com/th/id/OIP.ae1KLWI_SY9VTUcwbD9xwgHaE8?rs=1&pid=ImgDetMain" alt="Two people discussing Ayurvedic treatment" className="rounded-2xl h-[28vh]"/>   
                </div>
                
                <div className="bg-white p-4  h-[28vh] w-[20vw] transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <h2 className="text-center p-3 text-3xl mt-6 font-bold text-green-800">
                        Individual Treatment
                    </h2>
                    <p className="text-left ml-3 p-2 text-lg text-gray-600">
                        All Treatments are personalized based on a person`s unique constitution and health concerns.
                    </p>
                </div>

                <div className="rounded-2xl h-[28vh] w-[20vw] transition-transform duration-300 hover:scale-110 shadow-md mb-10">
                    <img src="https://i.ytimg.com/vi/sU_LPQVWMb0/maxresdefault.jpg" alt="Two people discussing Ayurvedic treatment" className="rounded-2xl h-[28vh]"/>   
                </div>
                </div>
           </div>

            
          {/* mobile version */}
          <div className="2xl:hidden ">
                <h1 className="text-green-800 text-center text-xl font-bold mb-4">
                    What sets Ayurvedic consultations apart?
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* 1 card */}
                <div className="bg-white p-2 mb-4 h-[31vh] transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <p className="text-center text-[#3b823a] font-bold text-lg mb-2">
                        स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
                    </p>
                    <p className="text-center p-2 text-sm text-gray-600">
                        The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. 
                    </p>
                </div>

                {/* 2 card */}
                <div className="flex h-[31vh] justify-center mb-4">
                    <img 
                        src="https://www.mtvhustle.com/wp-content/uploads/2023/06/amrutam-shark-tank-india-2.jpg" 
                        alt="A person receiving Ayurvedic treatment" 
                        className="rounded-lg" 
                    />
                </div>

                {/* 3 card */}
                <div className="bg-white h-[31vh] p-2 mb-4 transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <p className="text-left text-[#3b823a] font-bold ml-2 mt-4 text-lg">
                    Precise Diagnosis
                    </p>
                    <p className="text-left p-2 text-sm text-gray-600">
                    Ayurveda`s core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                    </p>
                </div>

                {/* 4 card */}
                <div className="flex h-[31vh] justify-center mb-4">
                    <img 
                        src="https://th.bing.com/th/id/OIP.ae1KLWI_SY9VTUcwbD9xwgHaE8?rs=1&pid=ImgDetMain" 
                        alt="A person receiving Ayurvedic treatment" 
                        className="rounded-lg" 
                    />
                </div>

                {/* 5 card */}
                <div className="bg-white h-[31vh] p-2 mb-4 transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <p className="text-left text-[#3b823a] font-bold ml-2 mt-6 text-lg">
                    Zero side-effects
                    </p>
                    <p className="text-left p-2 text-sm text-gray-600">
                    Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs.
                    </p>
                </div>

                {/* 6 card */}
                <div className="flex h-[31vh] justify-center mb-4">
                    <img 
                        src="https://i.ytimg.com/vi/sU_LPQVWMb0/maxresdefault.jpg" 
                        alt="A person receiving Ayurvedic treatment" 
                        className="rounded-lg" 
                    />
                </div>

                {/* 7 card */}
                <div className="bg-white h-[31vh] p-2 mb-4 transition-transform duration-300 hover:scale-110 rounded-2xl shadow-md border-t-4 border-green-800">
                    <p className="text-left text-[#3b823a] font-bold ml-2 mt-5 text-lg">
                    Individual Treatment
                    </p>
                    <p className="text-left p-2 text-sm text-gray-600">
                    All Treatments are personalized based on a person`s unique constitution and health concerns.
                    </p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Consult
