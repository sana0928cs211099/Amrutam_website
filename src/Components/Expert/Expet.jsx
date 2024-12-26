
import React, { useRef, useEffect } from 'react';
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
        specialty: "Panchakarma Therapy",
        image: "https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1731313947963-profile.jpg",
        isNew: true,
        rating: 4.7
    },
    {
        name: "Vaidya Prerna",
        experience: "10 years of experience",
        specialty: "Kayachikitsa (General Medicine)",
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
        name: "Dr. Pallav Prajapati",
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
    }
];

function Expet() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const startX = useRef(0);
    const isDragging = useRef(false);
    const intervalRef = useRef(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? experts.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === experts.length - 1 ? 0 : prevIndex + 1));
    };

    const handleMouseDown = (e) => {
        startX.current = e.clientX;
        isDragging.current = true;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const diffX = e.clientX - startX.current;
        if (diffX > 100) {
            handlePrev();
            isDragging.current = false;
        } else if (diffX < -100) {
            handleNext();
            isDragging.current = false;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    // Automatically slide cards every 3 seconds ```javascript
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center underline underline-offset-1 decoration-4 decoration-zinc-400 text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-14">Top Ayurvedic Experts For</h1>
            
            
            <div className="flex justify-center space-x-8 mb-20">
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-16 w-16 hover:border-green-700 rounded-full">
                        <img src="https://amrutam.global/src/assets/all.svg" className="h-16 w-16" />
                    </button>
                    <span className="text-lg font-bold text-center text-green-700">All</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-16 w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716467487852-Insomania.png" className="h-16 w-16" />
                    </button>
                    <span className="text-lg font-bold text-center text-green-700">Insomnia</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 ml-1 border-gray-300 h-16 w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716480227650-Women%27s%20health%20concerns.png" className="h-16 w-16" />
                    </button>
                    <span className="text-lg font-bold text-center text-green-700">Women`s</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 ml-1 border-gray-300 hover:border-green-700 h-16 w-16 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716480290368-Digestive%20disorders.png" className="h-16 w-16" />
                    </button>
                    <span className="text-lg font-bold text-center text-green-700">Digestive</span>
                </div>
                <div className="flex flex-col">
                    <button className="flex items-center space-x-2 border-4 border-gray-300 h-16 w-16 hover:border-green-700 rounded-full">
                        <img src="https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1716533382525-Sexual%20health%20issues.png" className="h-16 w-16" />
                    </button>
                    <span className="text-lg font-bold text-center text-green-700">Sexual</span>
                </div>
            </div>


            <div 
                className="flex items-center justify-between"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <button onClick={handlePrev} className="p-2 rounded-full border border-gray-300">
                    <FaChevronLeft />
                </button>
                <div className="flex space-x-4 overflow-x-auto">
                    {experts.slice(currentIndex, currentIndex + 3).map((expert, index) => (
                        <div key={index} className="mx-auto bg-[#f8f3e7] animate-scroll border-4 border-green-300 rounded-3xl h-[37vh] w-[30vw] md:w-[15vw] shadow-lg overflow-hidden">
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
                <button onClick={handleNext} className="p-2 rounded-full border border-gray-300">
                    <FaChevronRight />
                </button>
            </div>
            <div className="text-center flex justify-center mt-12 mb-14">
                <button className="bg-green-100 border border-green-900 flex text-green-600 text-lg font-semibold gap-3 px-4 py-4 rounded-full">Find more experts <span><FaArrowRight size={20} className='mt-1' /></span></button>
            </div>
        </div>
    );
}

export default Expet;