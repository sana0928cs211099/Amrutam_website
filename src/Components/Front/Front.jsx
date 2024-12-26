import { useState, useEffect } from "react";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Front = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides] = useState([
    {
      src: "https://i.pinimg.com/originals/4b/4b/36/4b4b36b3752024681982dda9f4882709.jpg",
      alt: "Slide 1",
    },
    {
      src: "https://thumbs.dreamstime.com/b/elaboration-natural-plant-medicine-soil-front-nature-elaboration-natural-plant-medicine-mortar-wooden-spoon-162536268.jpg",
      alt: "Slide 2",
    },
    {
      src: "https://mindbodygreen-res.cloudinary.com/image/upload/w_735,q_auto,f_auto,fl_lossy/org/fbpim1pj7k9da6uyp.jpg",
      alt: "Slide 3",
    },
    {
      src: "https://th.bing.com/th/id/R.0ff00c21c0cd72500713ff4ef478cb82?rik=Vtp0ZpEbpxSfKw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f0%2ff%2f243616.jpg&ehk=wqZZJ%2f8WuKnItuT5F2UypF3Z%2fAcE%2f499vnsz3Zj4buY%3d&risl=&pid=ImgRaw&r=0",
      alt: "Slide 4",
    },
    {
      src: "https://wallpapercave.com/wp/wp5540049.jpg",
      alt: "Slide 5",
    },
  ]);

  const autoplayInterval = 2000; // autoplay interval in milliseconds (5000 = 5 seconds)

  useEffect(() => {
    const autoplayId = setInterval(() => {
      setActiveSlide((prevActiveSlide) => (prevActiveSlide === slides.length - 1 ? 0 : prevActiveSlide + 1));
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayId);
    };
  }, [slides]);

  const handlePrevClick = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide === 0 ? slides.length - 1 : prevActiveSlide - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prevActiveSlide) => (prevActiveSlide === slides.length - 1 ? 0 : prevActiveSlide + 1));
  };

  return (
    <div id="indicators-carousel" className="relative" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative inset-0 h-[69vh] overflow-hidden object-cover md:h-[80vh] lg:h-[95vh] bg-cover bg-no-repeat">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-500 ease-in-out ${index === activeSlide ? "active" : "hidden"}`}
            data-carousel-item={index === activeSlide ? "active" : ""}
          >
            <img
              src={slide.src}
              className="absolute block h-full object-cover opacity-50 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
            />
           <div className="relative z-10 p-4 text-white md:p-16 lg:p-24 mt-16 lg:mt-32 xl:mt-32 2xl:mt-40">
                    <h2 className="text-base font-serif md:text-xl text-green-800 lg:font-bold lg:text-3xl xl:text-3xl">Namaste, Welcome to Amrutam</h2>
                    <h1 className="text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mt-2">
                        Step into Holistic Healing with <span className="text-[#f4a261]">Ayurveda</span>
                    </h1>
                    <h1 className="text-xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">Book Consultation With Certified Experts.</h1>
                    <p className="mt-4 text-xs font-bold md:text-base lg:text-lg">
                        Dive into the world of ayurveda and experience personalized health solutions and holistic guidance from trusted ayurvedic doctors anytime, anywhere.
                    </p>
                    <button className="lg:mt-8 mt-3 bg-[#22834c] hover:bg-[white] hover:text-[#22834c] border-2 border-green-500 text-white py-2 px-4 rounded-lg text-xs md:text-base lg:text-lg">
                        BOOK AN APPOINTMENT
                    </button>
                </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`lg:w-3 lg:h-3 h-2 w-2 rounded-full ${index === activeSlide ? "bg-white" : "bg-gray-300"}`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            />
          ))}
        </div>
  
        {/* Slider controls */}
        {/* Previous button */}
        <button
          type="button"
          className="absolute lg:top-0 top-8 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaChevronLeft className="w-3 h-3 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
  
        {/* Next button */}
        <button
          type="button"
          className="absolute lg:top-0 top-8 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaChevronRight className="w-3 h-3 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    );
  };
  
  export default Front;