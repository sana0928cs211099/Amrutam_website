

const Second = () => {
  return (

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-7 p-6 py-10 md:p-16 lg:p-10  lg:divide-x-4 divide-yellow-200 lg:px-40 bg-[#f8f3e7] text-green-700">
                <div className="flex flex-row items-center justify-center lg:animate-zoomIn cursor-pointer hover:animate-none text-center">
                    <img src="https://amrutam.global/images/speech-bubble.png" className="lg:h-20 lg:w-20 h-16 w-16 rounded-full " />
                    <p className=" ml-4 text-xs text-left md:text-base lg:text-base font-bold">Convenient Online & <br/> In-Clinic Consultations</p>
                </div>
                <div className="flex flex-row items-center justify-center lg:animate-zoomIn cursor-pointer hover:animate-none text-center">
                <img src="https://amrutam.global/images/shield.png" className="lg:h-20 lg:w-20 h-16 w-16 rounded-full" />
                    <p className="ml-4 mr-5 text-xs text-left md:text-base lg:text-base font-bold">Safe And Effective <br/> Treatment</p>
                </div>
                <div className="flex flex-row items-center  justify-center lg:animate-zoomIn cursor-pointer hover:animate-none text-center">
                <img src="https://amrutam.global/images/doctor.png" className="lg:h-20 lg:w-20 h-16 w-16 rounded-full" />
                    <p className="ml-4 text-xs text-left md:text-base lg:text-base font-bold">Experienced Ayurvedic <br/> Practitioners</p>
                </div>
                <div className="flex flex-row items-center  justify-center lg:animate-zoomIn cursor-pointer hover:animate-none  text-center">
                <img src="https://amrutam.global/images/prescription.png" className="lg:h-20 lg:w-20 h-16 w-16 rounded-full" />
                    <p className="ml-4 text-xs text-left md:text-base lg:text-base font-bold">Personalized Treatment <br/> Plans & Guidance</p>
                </div>
            </div>
  )
}

export default Second
