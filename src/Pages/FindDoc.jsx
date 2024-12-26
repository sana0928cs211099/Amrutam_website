import { FaMapMarkerAlt, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { FaStar, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DoctorCard = ({ id, image, name, rating, specialty, experience, languages, videoFee, chatFee }) => (
    <div className="bg-[#f8f3e7] rounded-3xl border-4 md:w-[40vw] border-green-600 p-6 shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4">
            <img src={image} alt="Doctor's profile picture" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <div className="text-center">
            <div className="flex justify-center items-center mb-2">
                <span className="text-lg font-bold">{name}</span>
                <div className="ml-2 flex items-center">
                    <span className="text-sm font-medium">{rating}</span>
                    <FaStar className="text-yellow-500 ml-1" />
                </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{specialty}</p>
            <p className="text-sm text-gray-700 mb-2">{experience}</p>
            <p className="text-sm text-gray-700 mb-4">Speaks: {languages}</p>
            <div className="flex md:flex-row sm:flex-col gap-3 justify-center mb-4">
                <button className="bg-white border text-sm border-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                    Video Consultation<br />{videoFee}
                </button>
                <button className="bg-white border text-sm border-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                    Chat Consultation<br />{chatFee}
                </button>
            </div>
            <div className='flex flex-col'>
                <Link to={`/profile/${id}`} className="bg-white hover:bg-[#22834c] border border-gray-300 text-[#22834c] hover:text-[white] font-semibold py-2 px-4 rounded-lg w-full mb-2">View Profile</Link>
                <Link className="bg-[#22834c] hover:bg-white text-white hover:text-[#22834c] font-semibold py-2 px-4 rounded-lg w-full">Book a consultation</Link>
            </div>
        </div>
    </div>
);    


const FindDoc = () => {
    return (
        <div className="bg-white items-center justify-center">
            <div className="bg-[#cee2ce] text-center p-6 w-full">
                <h1 className="text-3xl font-semibold mt-28 mb-10">Find Expert Doctors For An In-Clinic Session Here</h1>
                <div className="hidden sm:flex justify-center items-center mb-7 space-x-2">
                    <div className="flex items-center border rounded-md p-2 bg-white">
                        <FaMapMarkerAlt className="text-green-600 mr-2" />
                        <select className="outline-none">
                            <option>Select Location</option>
                            {/* Add more options as needed */}
                        </select>
                        <FaChevronDown className="ml-2" />
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="eg. Doctor, specialisation, clinic name" 
                            className="border rounded-md p-2 w-80 text-base outline-none"
                        />
                        <button className="absolute inset-y-0 right-2">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="sm:hidden flex flex-col justify-center items-center mb-7 space-y-2">
                    <div className="flex items-center border rounded-md p-2 bg-white">
                        <FaMapMarkerAlt className="text-green-600 mr-2" />
                        <select className="outline-none">
                            <option>Select Location</option>
                            {/* Add more options as needed */}
                        </select>
                        <FaChevronDown className="ml-2" />
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="eg. Doctor..."
                            className="border rounded-md p-2 w-48 text-sm outline-none"
                        />
                        <button className="absolute inset-y-0 right-2">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-9 mt-7 mb-6">
                    <select className="border border-gray-300 bg-gray-200 text-xs sm:text-base rounded-lg shadow-lg py-2 px-4">
                        <option>Expertise</option>
                    </select>
                    <select className="border border-gray-300 bg-gray-200 text-xs sm:text-base rounded-lg shadow-lg py-2 px-4">
                        <option>Gender</option>
                    </select>
                    <select className="border border-gray-300 bg-gray-200 text-xs sm:text-base rounded-lg shadow-lg py-2 px-4">
                        <option>Fees</option>
                    </select>
                    <select className="border border-gray-300 bg-gray-200 text-xs sm:text-base rounded-lg shadow-lg py-2 px-4">
                        <option>Languages</option>
                    </select>
                    <select className="border border-gray-300 bg-gray-200 text-xs sm:text-base rounded-lg shadow-lg py-2 px-4">
                        <option>All filters</option>
                    </select>
                </div>
                <hr className="border w-full border-zinc-300 hover:border-purple-500 drop-shadow-xl" />
                <div className="flex flex-wrap justify-end mr-0 sm:mr-24 md:mr-96 gap-2 mt-14 mb-11">
                    <span className="bg-[#cee2ce] text-gray-700 py-1 flex px-3 text-xs sm:text-base cursor-pointer rounded-full">Hair care <FaTimes className="ml-3 mt-1" /></span>
                    <span className="bg-[#cee2ce] text-gray-700 py-1 flex px-3 text-xs sm:text-base cursor-pointer rounded-full">Female <FaTimes className="ml-3 mt-1" /></span>
                    <span className="bg-[#cee2ce] text-gray-700 py-1 flex px-3 text-xs sm:text-base cursor-pointer rounded-full">Rs.0-Rs.500 <FaTimes className="ml-3 mt-1" /></span>
                    <span className="bg-[#cee2ce] text-gray-700 py-1 flex px-3 text-xs sm:text-base cursor-pointer rounded-full">Hindi <FaTimes className="ml-3 mt-1" /></span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 p-4 mb-24">
                    <DoctorCard 
                     id="1"
                     image='https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726334668953-1001785866.jpg' 
                     name="Dr Purvi Thakkar" 
                     rating="4.5" 
                     specialty="Male-Female Infertility" 
                     experience="7 years of Experience" 
                     languages="English, Hindi, Marathi" 
                     videoFee="₹800" 
                     chatFee="Free" />

                    <DoctorCard id='2' 
                    image="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1731313947963-profile.jpg" 
                    name="Meera Mannemela" 
                    rating="4.8" 
                    specialty="Cardiology" 
                    experience="10 years of Experience" 
                    languages="English, Hindi" 
                    videoFee="₹1000" 
                    chatFee="Free" />


                    <DoctorCard 
                    id='3' 
                    image="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726418118351-1000115960.jpg" 
                    name="Dr. Meenal Pasari" 
                    rating="4.7" 
                    specialty="Pediatrics" 
                    experience="5 years of Experience" 
                    languages="English, Marathi" 
                    videoFee="₹600" 
                    chatFee="Free" />

                    <DoctorCard 
                    id='4' 
                    image="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1717563545659-Screenshot%202024-06-05%20102846.png" 
                    name="Dr. Isha Negi" 
                    rating="4.6" 
                    specialty="Dermatology" 
                    experience="8 years of Experience" 
                    languages="English, Hindi" 
                    videoFee="₹900" 
                    chatFee="Free" />
                </div>
            </div>
        </div>
    );
};

export default FindDoc;