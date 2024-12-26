import { useState } from 'react';
import { FaCalendarAlt, FaUserMd, FaClipboardList, FaWrench} from 'react-icons/fa';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const Approach = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // 4 is the number of cards
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 4) % 4); // 4 is the number of cards
    };

    gsap.registerPlugin(ScrollTrigger);

// Create the animation
gsap.from("#animateMe", {
  scrollTrigger: {
    trigger: "#animateMe",
    start: "top 80%", // Start the animation when the top of the element hits 80% of the viewport height
    end: "top 30%", // End the animation when the top of the element hits 30% of the viewport height
    scrub: true, // Enable scrub for smooth animation
  },
  y: 50, // Move the element down by 50 pixels
  duration: 1,
});


  return (

<div className="flex flex-col items-center p-4 lg:p-10">
   
   {/* desktop version */}
    <div  className='hidden lg:flex flex-col items-center'>

    <h1 className="text-center underline underline-offset-1 decoration-4 decoration-zinc-400  text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-6">
        Our Ayurvedic Approach</h1>
    <p className="text-center text-gray-700 text-lg mb-14 lg:w-[60vw] xl:max-w-2xl ">
        At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient`s body type, medical history, and current health conditions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-14">

        <div className="bg-[#f8f3e7] p-6 rounded-2xl xl:h-[34vh] xl:w-[15vw] hover:animate-flipScale border-t-4 border-green-800 shadow-md text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                    <FaCalendarAlt />
                </div>
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Make Appointment</h2>
            <p className="text-gray-700 text-base xl:text-lg">You must make an appointment in advance, to choose the service and date.</p>
        </div>

        <div className="bg-[#f8f3e7] p-6 rounded-2xl xl:h-[34vh] xl:w-[15vw] hover:animate-flipScale border-t-4 border-green-800 shadow-md text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                    <FaUserMd />
                </div>
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Consultations</h2>
            <p className="text-gray-700 text-base xl:text-lg">The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
        </div>

        <div className="bg-[#f8f3e7] p-6 rounded-2xl xl:h-[34vh] xl:w-[15vw] hover:animate-flipScale border-t-4 border-green-800 shadow-md text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                    <FaClipboardList />
                </div>
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Treatment Planning</h2>
            <p className="text-gray-700 text-base xl:text-lg">The Ayurvedic practitioner creates a personalized treatment plan for you.</p>
        </div>

        <div className="bg-[#f8f3e7] p-6 rounded-2xl xl:h-[34vh] xl:w-[15vw] hover:animate-flipScale border-t-4 border-green-800 shadow-md text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-green-800 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                    <FaWrench />
                </div>
            </div>
            <h2 className="text-xl font-bold text-green-800 mb-2">Maintenance</h2>
            <p className="text-gray-700 text-base xl:text-lg">These visits allow for assessment of progress, adjustments to the <br/> treatment.</p>
        </div>
      </div>
    </div>

     {/* mobile version */}
     <div className="lg:hidden flex flex-col items-center bg-white font-roboto">
            <h1 className="text-green-800 text-center text-2xl font-bold mb-4">Our Ayurvedic Approach</h1>
            <p className="text-gray-700 text-center text-sm mb-6">
                At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient`s body type, medical history, and current health conditions.
            </p>

            <div className="relative w-[80vw] md:w-[60vw] shadow-xl border-t-4 rounded-3xl border-green-700 overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Card 1 */}
                    <div className="bg-amber-50 rounded-lg shadow-lg p-6 w-full flex-shrink-0">
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                        </div>
                        <h2 className="text-green-800 text-lg font-bold text-center mb-2">Make Appointment</h2>
                        <p className="text-gray-700 text-center">
                            You must make an appointment in advance, to choose the service and date.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-amber-50 rounded-lg shadow-lg p-6 w-full flex-shrink-0">
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                        </div>
                        <h2 className="text-green-800 text-lg font-bold text-center mb-2">Consultation</h2>
                        <p className="text-gray-700 text-center">
                        The next stage involves a thorough consultation with an Ayurveda practitioner.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-amber-50 rounded-lg shadow-lg p-6 w-full flex-shrink-0">
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                        </div>
                        <h2 className="text-green-800 text-lg font-bold text-center mb-2">Treatment Planning</h2>
                        <p className="text-gray-700 text-center">
                        The Ayurvedic practitioner creates a personalized treatment plan for you.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-amber-50 rounded-lg shadow-lg p-6 w-full flex-shrink-0">
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">4</div>
                        </div>
                        <h2 className="text-green-800 text-lg font-bold text-center mb-2">Maintenance</h2>
                        <p className="text-gray-700 text-center">
                        These visits allow for assessment of progress, adjustments to the treatment.
                        </p>
                    </div>
                </div>
                <button onClick={prevSlide} className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full">
                    &lt;
                </button>
                <button onClick={nextSlide} className="absolute -right-2 top-1/2 transform - translate-y-1/2 bg-green-700 text-white p-2 rounded-full">
                    &gt;
                </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                <div className={`w-2.5 h-2.5 rounded-full ${currentIndex === 0 ? 'bg-green-800' : 'bg-gray-400'}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${currentIndex === 1 ? 'bg-green-800' : 'bg-gray-400'}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${currentIndex === 2 ? 'bg-green-800' : 'bg-gray-400'}`}></div>
                <div className={`w-2.5 h-2.5 rounded-full ${currentIndex === 3 ? 'bg-green-800' : 'bg-gray-400'}`}></div>
            </div>
            
    </div>
    
</div>
  )
}

export default Approach;
