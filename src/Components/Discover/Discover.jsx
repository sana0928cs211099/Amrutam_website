// import { FaHeartbeat, FaSpa, FaLeaf, FaBrain, FaLemon, FaShieldAlt } from 'react-icons/fa';

const Discover = () => {
  return (
     <div className="flex flex-col items-center p-4">
        {/* destop version  */}
        <div className="hidden lg:flex flex-col items-center">
                <h1 className="text-4xl underline underline-offset-1 decoration-4 decoration-zinc-400 font-bold text-green-700 mb-2 mt-12" >Discover Ayurveda`s Magic With Us</h1>
                <p className="text-center text-gray-600 mb-8 items-center max-w-xl">
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It`s like a journey to better health using ancient wisdom, a totally effective approach for a better life.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
    
                  <div className="flex-col mt-10">
                    {/*1st row*/}
                    
                    <div className="flex flex-row gap-4 text-center md:ml-40 w-[37vw] lg:ml-8 xl:ml-20 2xl:ml-64">
                        <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">Personalized Wellness</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Get treatments made just for you <br/> based on your individual doshas <br/> (body type).</p>
                        </div>
                        {/* <div className="bg-blue-100 p-4 rounded-full mb-4 mt-4">
                            <FaHeartbeat className="text-blue-400 h-14 w-14 text-2xl" />
                        </div> */}
                        <div className="bg-[#edf5fa] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/personalized.png" className="h-14 w-14 text-2xl" />
                        </div>
                    </div>
    
                    {/*2nd row*/}
                    <div className="flex flex-row gap-4 text-center lg:ml-3 xl:ml-20 2xl:ml-40 lg:mt-16 2xl:mt-28">
                        <div className="text-right">
                        <h2 className="text-lg font-bold mb-2">Holistic Healing</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Fix the root problem for <br/> long-lasting health.</p>
                        </div>
                        {/* <div className="bg-purple-100 p-4 rounded-full mb-4 ">
                            <FaSpa className="text-purple-500 h-14 w-14 text-2xl" />
                        </div> */}
                        <div className="bg-[#f5f3fc] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/healing.png" className="h-14 w-14 text-2xl" />
                        </div>
                    </div>
    
                    {/*3rd row*/}
                    <div className="flex flex-row gap-4 text-center lg:ml-8 xl:ml-36 2xl:ml-72 lg:mt-16 2xl:mt-28">
                        <div className="text-right">
                        <h2 className="text-lg font-bold mb-2">Focus on prevention</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Stop problems even <br/> before they start.</p>
                        </div>
                        {/* <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FaLeaf className="text-green-500 h-14 w-14 text-2xl" />
                        </div> */}
                        <div className="bg-[#eaf2ea] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/prevention.png" className="h-14 w-14 text-2xl" />
                        </div>
                    </div>
                    </div>
    
                    <div className="lg:mt-16 xl:mt-14 2xl:mt-0">
                    <img src="https://amrutam.global/images/main-lg.png" className="rounded-full transform transition-transform duration-300 hover:animate-flipColor xl:h-[60vh] xl:w-[30vw] 2xl:h-[60vh] 2xl:w-[30vw]" />
                    </div>
    
                    <div className="flex-col mt-10">
                    {/*4th row*/}
                    <div className="flex flex-row gap-4 text-center ">
                        {/* <div className="bg-red-100 p-4 rounded-full mb-4">
                            <FaBrain className="text-red-500 h-14 w-14  text-2xl" />
                        </div> */}
                        <div className="bg-[#fbf0f0] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/mind-body.png" className="h-14 w-14 text-2xl" />
                        </div>
                        <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">Mind-Body Connection</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Keep your mind and body in <br/> sync for a happy life.</p>
                        </div>
                    </div>
    
                    {/*5th row*/}
                    <div className="flex flex-row gap-4 text-center lg:ml-11 xl:ml-28 lg:mt-16 2xl:mt-28">
                        {/* <div className="bg-yellow-100 p-4 rounded-full mb-4">
                            <FaLemon className="text-yellow-500 h-14 w-14  text-2xl" />
                        </div> */}
                        <div className="bg-[#fef6ed] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/remedies.png" className="h-14 w-14 text-2xl" />
                        </div>
                        <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">Natural Remedies</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Using herbs and natural <br/> therapies for healing.</p>
                        </div>
                    </div>
    
                    {/*6th row*/}
                    <div className="flex flex-row gap-4 text-center ml-7 lg:mt-16 2xl:mt-28">
                        {/* <div className="bg-green-100 p-4 rounded-full mb-4">
                            <FaShieldAlt className="text-green-500 h-14 w-14  text-2xl" />
                        </div> */}
                        <div className="bg-[#eaf2ea] lg:p-2 xl:p-4 rounded-full animate-spin-slow cursor-pointer hover:animate-none mb-4 mt-4">
                           <img src="https://amrutam.global/images/immunity.png" className="h-14 w-14 text-2xl" />
                        </div>
                        <div className="text-left">
                        <h2 className="text-lg font-bold mb-2">Boosting immunity</h2>
                        <p className="text-gray-600 lg:text-sm xl:text-base">Stay strong and healthy for <br/> life, not just for today.</p>
                        </div>
                    </div>
    
                  </div>
                </div>
        </div>

        {/* mobile version  */}
        <div className="lg:hidden text-center p-2">
                <h1 className="text-green-800 text-center text-xl font-bold mb-4">Discover Ayurveda’s Magic With Us</h1>
                <p className="text-gray-700 text-sm mb-4">
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality. It`s like a journey to better health using ancient wisdom, a totally effective approach for a better life.
                </p>
                <img src="https://amrutam.global/images/main-lg.png" alt="Person meditating with a decorative background" className="mx-auto"/>
                <div className="flex flex-wrap justify-center p-4">

            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/personalized.png" alt="Icon for Personalized Wellness" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2 ">Personalized Wellness</h2>
                    <p className="text-gray-600 text-sm">Treatments made just for you based on your individual doshas, [body type]</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/prevention.png" alt="Icon for Focus on prevention" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2">Focus on prevention</h2>
                    <p className="text-gray-600 text-sm">Stop problems even before they start.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/mind-body.png" alt="Icon for Mind-Body Connection" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2">Mind-Body Connection</h2>
                    <p className="text-gray-600 text-sm">Keep your mind and body in sync for a happy life.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/healing.png" alt="Icon for Holistic Healing" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2">Holistic Healing</h2>
                    <p className="text-gray-600 text-sm">Fix the root problem for long-lasting health.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/remedies.png" alt="Icon for Natural Remedies" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2">Natural Remedies</h2>
                    <p className="text-gray-600 text-sm">Using herbs and natural therapies for healing.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="border rounded-lg p-4 text-center shadow-md">
                    <img src="https://amrutam.global/images/immunity.png" alt="Icon for Boosting immunity" className="mx-auto mb-4" />
                    <h2 className="text-base font-semibold mb-2">Boosting immunity</h2>
                    <p className="text-gray-600 text-sm">Stay strong and healthy for life, not just for today.</p>
                </div>
            </div>
        </div>
        </div>
     </div>
  )
}

export default Discover
