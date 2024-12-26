import React from 'react';
import { FaCheckCircle, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaRegCalendar } from "react-icons/fa";
import { useParams } from 'react-router-dom';

// Sample reviews data
const reviews = [
    {
        name: "Alicent Hightower",
        consultedFor: "Skin care",
        date: "20 January 2023",
        rating: 5,
        review: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
        imageUrl: "https://placehold.co/50x50",
        altText: "Profile picture of Alicent Hightower"
    },
    {
        name: "Alicent Hightower",
        consultedFor: "Pregnancy",
        date: "20 January 2023",
        rating: 5,
        review: "Might be bit early to confirm but yes I can see noticeable difference, will write again after using it for longer periods",
        imageUrl: "https://placehold.co/50x50",
        altText: "Profile picture of Alicent Hightower"
    }
];

// Sample doctor data
const doctors = [
    { id:"1",
        image:'https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726334668953-1001785866.jpg',
        name:"Dr Purvi Thakkar" ,
        rating:"4.5" ,
        specialty:"Male-Female Infertility",
        experience:"7 years of Experience" ,
        languages:"English, Hindi, Marathi" ,
        videoFee:"₹800",
        chatFee:"Free" },
        {
            id:"2",
            image:'https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1731313947963-profile.jpg',
            name:"Meera Mannemela" ,
            rating:"4.8" ,
            specialty:"Cardiology",
            experience:"10 years of Experience" ,
            languages:"English, Hindi" ,
            videoFee:"��1000",
            chatFee:"Free" 
        },
        {
            id:"3",
            image:'https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1726418118351-1000115960.jpg',
            name:"Dr. Meenal Pasari" ,
            rating:"4.7" ,
            specialty:"Pediatrics",
            experience:"5 years of Experience" ,
            languages:"English, Marathi" ,
            videoFee:"��600",
            chatFee:"Free"  
        },
        {
            id:"4",
            image:'https://amstorage2024.blob.core.windows.net/amrutam-main-storage/1717563545659-Screenshot%202024-06-05%20102846.png',
            name:"Dr. Isha Negi" ,
            rating:"4.6" ,
            specialty:"Dermatology",
            experience:"8 years of Experience" ,
            languages:"English, Hindi" ,
            videoFee:"��900",
            chatFee:"Free"
        },
    // Add more doctors as needed
];

const Profile = () => {
    const { id } = useParams();
    const doctor = doctors.find(doc => doc.id === id);

    return (
        <>
            <div className="max-w-7xl mx-auto mt-28 px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-[url('https://wallpapers.com/images/hd/abstract-green-background-20l9hsthidshgxtv.jpg')] h-36 object-cover bg-no-repeat items-center justify-center">
                        
                    </div>
                    <div className="p-6 flex flex-col md:flex-row items-center">
                        <img 
                            src={doctor?.image} 
                            alt="Profile picture" 
                            className="rounded-full w-28 h-28 border-4 border-white -mt-24" 
                        />
                        <div className="ml-6 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start">
                                <h2 className="text-xl font-semibold">{doctor?.name}</h2>
                                <FaCheckCircle className="text-blue-500 ml-2" />
                            </div>
                            <p className="text-gray-600">{doctor?.specialty}</p>
                            <div className="flex items-center mt-2 justify-center md:justify-start">
                                <span className="text-yellow-500 text-lg">{doctor?.rating}</span>
                                <div className="flex ml-2">
                                    {[...Array(Math.floor(doctor?.rating))].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ))}
                                    {doctor?.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500" />}
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto flex items-center mr-14 md:mr-9 space-x-8 mt-4 md:mt-0">
                        <div className="text-center">
                            <p className="text-gray-600">Followers</p>
                            <p className="text-xl font-semibold">850</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">Following</p>
                            <p className="text-xl font-semibold">18K</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">Posts</p>
                            <p className="text-xl font-semibold">250</p>
                        </div>

                    </div>
                        <button className="hover:bg-[white] bg-[#22834c] text-[white] border-2 border-green-500 hover:text-[#22834c] mt-4 sm:mt-0 px-4 py-2 rounded-lg ml-auto">
                            Book an Appointment
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg mt-10 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="border rounded-lg mb-6">
                            <div className="flex justify-between bg-[#e8e8d2] items-center shadow-md mb-4">
                                <h2 className="text-lg font-semibold pl-4 mt-5 mb-6">A Little About Me</h2>
                                <button className="hover:bg-[white] bg-[#22834c] text-[white] border-2 border-green-500 hover:text-[#22834c] text-gray -700 px-3 py-1 mr-2 rounded-full">Follow +</button>
                            </div>
                            <div className="p-5">
                                <p className="text-gray-700 mb-4">
                                    Hello, I am {doctor?.name} , a {doctor?.specialty} at Sanjivini Hospital Surat. I love working with my hospital staff and senior doctors. I completed my graduation in {doctor?.specialty} Medicine.
                                </p>
                                <button className="text-green-600">Read More</button>
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold">Languages Spoken</h3>
                                    <div className="flex space-x-2 mt-2">
                                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{doctor?.languages}</span>
                    
                                    </div>
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <FaInstagram className="text-gray-700" />
                                    <FaFacebook className="text-gray-700" />
                                    <FaTwitter className="text-gray-700" />
                                    <FaYoutube className="text-gray-700" />
                                </div>
                            </div>
                        </div>

                        <div className="border rounded-lg mb-6">
                            <h2 className="text-lg bg-[#e8e8d2] font-semibold py-4 pl-4 shadow-md mb-6">I Specialize In</h2>
                            <div className="grid grid-cols-4 p-4">
                                {['Women\'s Health', 'Skin Care', 'Immunity', 'Hair Care'].map((specialty) => (
                                    <div className="flex flex-col items-center" key={specialty}>
                                        <img src="https://placehold.co/50x50" alt={specialty} className="mb-2" />
                                        <span className="text-gray-700">{specialty}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border rounded-lg mb-6">
                            <h2 className="text-lg bg-[#e8e8d2] font-semibold py-4 pl-4 shadow-md mb-6">The Concerns I Treat</h2>
                            <div className="flex flex-wrap p-5 gap-2">
                                {['Skin Treatment', 'Pregnancy', 'Period Doubts', 'Endometriosis', 'Pelvic Pain', 'Ovarian Cysts', '+ 5 More'].map((concern) => (
                                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full" key={concern}>{concern}</span>
                                ))}
                            </div>
                        </div>

                        <div className="border rounded-lg mb-6">
                            <h2 className="text-lg bg-[#e8e8d2] font-semibold py-4 pl-4 shadow-md mb-6">My Work Experience</h2>
                            <div className="p-5">
                                <p className="text-[#1d7a1d] font-bold mb-4">I HAVE BEEN IN PRACTICE FOR: {doctor?.experience}</p>
                                <hr className="border w-full border-zinc-300 drop-shadow-xl mb-2" />
                                {[
                                    { clinic: 'Midtown Medical Clinic', role: 'Senior doctor', duration: '2016-PRESENT' },
                                    { clinic: 'Midtown Medical Clinic', role: 'Senior doctor', duration: '2010-2015' }
                                ].map((experience, index) => (
                                    <div className="flex items-center mb-4" key={index}>
                                        <img src="https://amrutam.global/education.svg" alt={experience.clinic} className="mr-4" />
                                        <div>
                                            <p className="text-gray-700">{experience.clinic}</p>
                                            <p className="text-gray-500 text-sm">{experience.role}</p>
                                            <p className="text-gray-500 text-sm">{experience.duration}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border rounded-lg">
                            <h2 className="text-lg bg-[#e8e8d2] font-semibold py-4 pl-4 shadow-md mb-6">Featured Reviews ( 102)</h2>
                            <div className="p-5">
                                {reviews.map((review, index) => (
                                    <div key={index} className="mb-4 p-4 bg-gray-50 shadow-sm border-2 border-gray-200 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <img src={review.imageUrl} alt={review.altText} className="w-12 h-12 rounded-full mr-4" />
                                            <div>
                                                <h3 className="font-semibold">{review.name}</h3>
                                                <p className="text-sm text-gray-500">Consulted for {review.consultedFor}</p>
                                            </div>
                                            <div className="ml-auto text-sm text-gray-500">{review.date}</div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-500" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700">{review.review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="border rounded-lg p-4 mb-6">
                            <div className="flex justify-between border border-gray-300 py-3 p-3 rounded-lg items-center mb-8">
                                <h2 className="text-lg font-medium">Appointment Fee</h2>
                                <span className="text-green-600 font-semibold">{doctor?.videoFee}</span>
                            </div>
                            <h3 className="text-lg font-semibold flex mb-2 gap-3 p-4">Select your mode of session
                                <hr className="border w-64 border-zinc-300 drop-shadow-xl mt-4" />
                            </h3>
                            <div className="flex justify-evenly mb-4">
                                <button className="text-gray-700 border-2 border-gray-300 px-3 md:px-9 py-4 rounded-xl">
                                    <span className="font-bold">In-Clinic</span><br />45 Mins
                                </button>
                                <button className="bg-green-100 border-2 border-gray-300 text-green-600 px-3 md:px-9 py-4 rounded-xl">
                                    <span className="font-bold">Video</span><br />45 Mins
                                </button>
                                <button className="text-gray-700 border-2 border-gray-300 px-3 md:px-9 py-4 rounded-xl">
                                    <span className="font-bold">Chat</span><br />10 Mins
                                </button>
                            </div>
                            <h3 className="text-lg font-semibold flex mb-2 gap-3 p-4">Pick a time slot
                                <hr className="border w-80 border-zinc-300 drop-shadow-xl mt-4" />
                                <FaRegCalendar size={23} className="mt-1" />
                            </h3>
                            <div className="flex space-x-2 border-2 border-gray-300 px-9 py-4 rounded-xl mb-4">
                                {[
                                    { day: 'Mon, 10 Oct', slots: '10 slots', color: 'bg-green-100' },
                                    { day: 'Tue, 11 Oct', slots: '02 slots', color: 'bg-red-100' },
                                    { day: 'Wed, 12 Oct', slots: '05 slots', color: 'bg-yellow-100' }
                                ].map((slot) => (
                                    <button className={`${slot.color} text-green-600 border-2 border-gray-300 px-3 md:px-9 py-1 rounded-xl`} key={slot.day}>
                                        {slot.day}<br />{slot.slots}
                                    </button>
                                ))}
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-4">Morning</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['08:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'].map((time) => (
                                        <button className="border-2 border-gray-300 hover:bg-[#19491c] hover:text-white text-gray-700 px-3 py-4 rounded-xl" key={time}>{time}</button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Even ing</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'].map((time) => (
                                        <button className="border-2 border-gray-300 text-gray-700 hover:bg-[#19491c] hover:text-white px-3 py-4 rounded-xl" key={time}>{time}</button>
                                    ))}
                                </div>
                            </div>
                            <button className="w-full hover:bg-[white] bg-[#22834c] text-[white] border-2 border-green-500 hover:text-[#22834c] py-3 mt-5 mb-5 rounded-full">Make An Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile