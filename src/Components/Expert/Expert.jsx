import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaArrowRight, FaLeaf } from 'react-icons/fa';

const experts = [
    {
        name: "Dr Purvi Thakkar",
        experience: "12 years of experience",
        specialty: "Grahani Chikitsa",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726334668953-1001785866.jpg",
        isNew: true,
        rating: 4.5
    },
    {
        name: "Meera Mannemela",
        experience: "15 years of experience",
        specialty: "Panchakarma ",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1731313947963-profile.jpg",
        isNew: true,
        rating: 4.7
    },
    {
        name: "Vaidya Prerna",
        experience: "10 years of experience",
        specialty: "Kayachikitsa ",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726473821585-1726468448859-IMG_0404%20(1).jpg",
        rating: 4.2
    },
    {
        name: "Dr. Meenal Pasari",
        experience: "19 years of experience",
        specialty: "Garbha Chikitsa",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726418118351-1000115960.jpg",
        rating: 5.0
    },
    {
        name: "Dr. Sapna Shukla",
        experience: "8 years of experience",
        specialty: "Nadi Pariksha",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1718858999119-sapna.jpg",
        rating: 4.8
    },
    {
        name: "Dr. Pooja Shetty",
        experience: "20 years of experience",
        specialty: "Panchakarma",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1717532984530-WhatsApp%20Image%202024-05-23%20at%2017.35.54_e47187e3.jpg",
        rating: 4.9
    },
    {
        name: "Dr. Pallav Sahu",
        experience: "20 years of experience",
        specialty: "Panchakarma",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1717563903997-pp.jpg",
        rating: 4.9
    },
    {
        name: "Dr. Isha Negi",
        experience: "20 years of experience",
        specialty: "Panchakarma",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1717563545659-Screenshot%202024-06-05%20102846.png",
        rating: 4.9
    },
];

function Expert() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3;

    const handleNext = () => {
        if (currentIndex < experts.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Reset to start
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(experts.length - 1); // Go to end
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center lg:underline underline-offset-1 decoration-4 decoration-zinc-400 text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-14">Top Ayurvedic Experts For</h1>
            
            {/* Category Buttons */}
            <div className="flex justify-center space-x-1 lg:space-x-8 mb-20">
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-10 w-10 lg:h-16 lg:w-16 hover:border-green-700 rounded-full">
                        <img src="https://amrutam.global/src/assets/all.svg" className="h-10 w-10 lg:h-16 lg:w-16" />
                    </button>
                    <span className="lg:text-lg text-xs font-medium text-center text-green-700">All</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-10 w-10 lg:h-16 lg:w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716467487852-Insomania.png" className="h-10 w-10 lg:h-16 lg:w-16" />
                    </button>
                    <span className="lg:text-lg text-xs font-medium text-center text-green-700">Insomnia</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 ml-1 border-gray-300 h-10 w-10 lg:h-16 lg:w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716480227650-Women%27s%20health%20concerns.png" className="h-10 w-10 lg:h-16 lg:w-16" />
                    </button>
                    <span className="lg:text-lg text-xs font-medium text-center text-green-700">Women`s</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 ml-1 border-gray-300 h-10 w-10 lg:h-16 lg:w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716480290368-Digestive%20disorders.png" className="h-10 w-10 lg:h-16 lg:w-16" />
                    </button>
                    <span className="lg:text-lg text-xs font-medium text-center text-green-700">Digestive</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-10 w-10 lg:h-16 lg:w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716533382525-Sexual%20health%20issues.png" className="h-10 w-10 lg:h-16 lg:w-16" />
                    </button>
                    <span className="lg:text-lg text-xs font-medium text-center text-green-700">Sexual</span>
                </div>
            </div>

            {/* Desktop version */}
            <div className="hidden md:block">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <button className="p-3 rounded-full border-2  border-green-600" onClick={handlePrev} disabled={experts.length <= cardsToShow}>
                        <FaChevronLeft size={22} className='text-[#976422] font-bold' />
                    </button>
                    <div className="flex space-x-4 w-[47.2vw] overflow-hidden">
                        <div className="flex transition-transform animate-scroll cursor-pointer hover:animate-none gap-5 duration-300" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                            {experts.map((expert, index) => (
                                <div key={index} className="mx-auto bg-[#f8f3e7] border-4 border-green-300 rounded-3xl h-[37.7vh] w-[15vw] shadow-lg overflow-hidden">
                                    <div className="p-6 text-center">
                                        <img 
                                            src={expert.image} alt={`Portrait of ${expert.name}`} 
                                            className="w-24 h-24 mx-auto rounded-full object-cover" 
                                        />
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="text-lg font-semibold">{expert.rating}</span>
                                            <FaStar className="text-yellow-500 ml-1" />
                                        </div>
                                        <h2 className="mt-2 text-xl font-bold text-gray-800">{expert.name}</h2>
                                        <p className="text-gray-600">{expert.specialty}</p>
                                        <div className="flex items-center justify-center mt-2 text-gray-600">
                                            <FaLeaf className="mr-1" />
                                            <span>{expert.experience}</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-0 rounded-full">{expert.specialty}</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#22834c] text-white text-center py-3 cursor-pointer">
                                        <span>View Profile</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="p-3 rounded-full border-2 border-green-600" onClick={handleNext} disabled={experts.length <= cardsToShow}>
                        <FaChevronRight size={22} className='text-[#976422] font-bold' />
                    </button>
                </div>
            </div>

            {/* Mobile version - showing one card at a time */}
            <div className="md:hidden">
                <div className="flex items-center justify-between mb-8">
                    <button className="p-1 rounded-full border border-gray-300" onClick={handlePrev}>
                        <FaChevronLeft />
                    </button>
                    <div className="flex overflow-hidden w-80">
                        <div className="flex transition-transform animate-scroll cursor-pointer hover:animate-none gap-2 duration-100" style={{ transform: `translateX(-${currentIndex * (50 / cardsToShow)}%)` }}>
                            {experts.map((expert, index) => (
                                <div key={index} className="mx-auto bg-[#f8f3e7] border-4 border-green-300 rounded-3xl h-[52.7vh] w-[67vw] shadow-lg overflow-hidden">
                                    <div className="p-6 text-center">
                                        <img 
                                            src={expert.image} alt={`Portrait of ${expert.name}`} 
                                            className="w-14 h-14 mx-auto rounded-full object-cover" 
                                        />
                                        <div className="flex items-center justify-center mt-2">
                                            <span className="text-sm font-semibold">{expert.rating}</span>
                                            <FaStar className="text-yellow-500 ml-1" />
                                        </div>
                                        <h2 className="mt-2 text-sm font-bold text-gray-800">{expert.name}</h2>
                                        <p className="text-gray-600 text-sm">{expert.specialty}</p>
                                        <div className="flex items-center justify-center mt-2 text-gray-600">
                                            <FaLeaf className="mr-1" />
                                            <span className="text-sm">{expert.experience}</span>
                                        </div>
                                             <div className="mt-2">
                                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0 rounded-full">{expert.specialty}</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#22834c] text-white text-center py-2 text-base cursor-pointer">
                                        <span>View Profile</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="p-1 rounded-full border border-gray-300" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            <div className="text-center flex justify-center mt-12 mb-14">
                <button className="bg-green-100 border-2 border-green-600 flex text-green-600 lg:text-xl text-sm font-semibold gap-3 px-4 lg:py-4 py-2 rounded-full">
                    Find more experts <span><FaArrowRight lg:size={20} className='mt-1' /></span>
                </button>
            </div>

        </div>
    );
}

export default Expert;