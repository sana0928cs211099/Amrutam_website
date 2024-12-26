import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        type: "Consulted for Skin",
        location: "Chennai",
        date: "17/02/24",
        name: "Sophie Moore",
        rating: 5,
        review: "One of a kind service",
        description: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipiscing.",
        bgColor: "bg-purple-100",
        image: "https://www.heartbowsmakeup.com/wp-content/uploads/2017/01/best-hair-growth-shampoo-conditioner-india.jpg",
    },
    {
        type: "Consulted for Hair",
        location: "Mumbai",
        date: "17/02/24",
        name: "John Doe",
        rating: 5,
        review: "Amazing experience!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        bgColor: "bg-green-100",
        image: "https://thumbs.dreamstime.com/b/smiling-man-portrait-13683883.jpg",
    },
    {
        type: "Consulted for Skin",
        location: "Delhi",
        date: "18/02/24",
        name: "Alice Smith",
        rating: 4,
        review: "Very satisfied with the results.",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bgColor: "bg-purple-100",
        image: "https://femina.wwmindia.com/content/2021/jan/beauty51609754986.jpg",
    },
    {
        type: "Consulted for Hair",
        location: "Bangalore",
        date: "19/02/24",
        name: "Michael Johnson",
        rating: 5,
        review: "Highly recommend this service!",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        bgColor: "bg-green-100",
        image: "https://i.pinimg.com/736x/bd/4a/ac/bd4aac6fa6f48e720d3ea9bd952c1226.jpg",
    },
    {
        type: "Consulted for Skin",
        location: "Chennai",
        date: "20/02/24",
        name: "Emily Davis",
        rating: 5,
        review: "Fantastic results!",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        bgColor: "bg-purple-100",
        image: "https://i.pinimg.com/736x/86/04/ce/8604ce225fde3df2df69cb4acb283112.jpg",
    },
    {
        type: "Consulted for Hair",
        location: "Mumbai",
        date: "21/02/24",
        name: "Chris Brown",
        rating: 4,
        review: "Good service overall.",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        bgColor: "bg-green-100",
        image: "https://th.bing.com/th/id/OIP.VgKDuzb8VNRjrotvaM-dMwHaJ4?rs=1&pid=ImgDetMain",
    }
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const cardsToShowMobile = 1; // Number of cards to show on mobile
    const cardsToShowDesktop = 3; // Number of cards to show on desktop

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsToShowDesktop));
    };

    // Automatically move to the next slide every few seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Determine how many cards to show based on screen size
    const isMobile = window.innerWidth < 1024; // Adjust this breakpoint as needed
    const cardsToShow = isMobile ? cardsToShowMobile : cardsToShowDesktop;

    const startIndex = currentSlide * cardsToShow;
    const displayedTestimonials = testimonials.slice(startIndex, startIndex + cardsToShow);

    return (
        <div className=" p-4 lg:p-8 bg-[#fdf4e3]">
            {/* Desktop version */}
            <div className="hidden lg:block">
                <h1 className="text-center underline underline-offset-1 decoration-4 decoration-zinc-400 text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-20">
                    Stories from our valued customers!
                </h1>
                <div className="flex justify-center lg:space-x-4">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div key={index} className="relative w-80">
                            <div className="bg-white xl:h-[34vh]  xl:w-[16.6vw] rounded-lg shadow-lg p-4">
                                <div className={`${testimonial.bgColor} p-2 rounded-t-lg`}>
                                    <p className="text-sm font-semibold">{testimonial.type}</p>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={testimonial.image}
                                            alt={`Portrait of ${testimonial.name}`}
                                            className="rounded-full w-10 h-10 mr-2"
                                        />
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                        </div>
                                        <p className="ml-auto text-sm text-gray-500">{testimonial.date}</p>
                                    </div>
                                    <div className="flex items-center mt-4 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className='text-yellow-500' />
                                        ))}
                                    </div>
                                    <p className="font-semibold mb-2">“{testimonial.review}”</p>
                                    <p className="text-sm text-gray-600">{testimonial.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 mb-14">
                    {Array.from({ length: Math.ceil(testimonials.length / cardsToShowDesktop) }).map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-green-800' : 'bg-gray-400'}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Mobile version */}
            <div className="block lg:hidden">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mt-4 mb-10">
                    Stories from our valued customers!
                </h1>
                <div className="flex flex-col items-center">
                    {displayedTestimonials.map((testimonial, index) => (
                        <div key={index} className="relative w-full md:w-80 mb-4">
                            <div className="bg-white h-[59vh] w-full rounded-lg shadow-lg p-4">
                                <div className={`${testimonial.bgColor} p-2 rounded-t-lg`}>
                                    <p className="text-sm font-semibold">{testimonial.type}</p>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={testimonial.image}
                                            alt={`Portrait of ${testimonial.name}`}
                                            className="rounded-full w-10 h-10 mr-2"
                                        />
                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                        </div>
                                        <p className="ml-auto text-sm text-gray-500">{testimonial.date}</p>
                                    </div>
                                    <div className="flex items-center mt-2 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className='text-yellow-500' />
                                        ))}
                                    </div>
                                    <p className="font-semibold mb-2">“{testimonial.review}”</p>
                                    <p className="text-sm text-gray-600">{testimonial.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 mb-14">
                    {Array.from({ length: Math.ceil(testimonials.length / cardsToShowMobile) }).map((_, index) => (
                        <span
                            key={index} className= {`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-green-800' : 'bg-gray-400'}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;