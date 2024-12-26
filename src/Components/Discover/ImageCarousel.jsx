

const ImageCarousel = () => {
  const images = [
    { src: 'https://amrutam.global/be-wellbeing.svg', alt: 'Be Wellbeing' },
    { src: 'https://amrutam.global/choice-of-fashion.svg', alt: 'Choice of Fashion' },
    { src: 'https://amrutam.global/deccan-herald.svg', alt: 'Deccan Herald' },
    { src: 'https://amrutam.global/forbes.svg', alt: 'Forbes' },
    { src: 'https://amrutam.global/gq.svg', alt: 'GQ' },
    { src: 'https://amrutam.global/huffpost.svg', alt: 'HuffPost' },
    { src: 'https://amrutam.global/lifestyle-asia.svg', alt: 'Lifestyle Asia' },
    { src: 'https://amrutam.global/livingetc.svg', alt: 'Livingetc' },
    { src: 'https://amrutam.global/shark-tank.svg', alt: 'Shark Tank' },
    { src: 'https://amrutam.global/times-of-india.svg', alt: 'Times of India' },
    { src: 'https://amrutam.global/traveller.svg', alt: 'Traveller' },
    { src: 'https://amrutam.global/vogue.svg', alt: 'Vogue' },
    { src: 'https://amrutam.global/your-story.svg', alt: 'Your Story' },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap mt-20 mb-16">
      <div className="flex animate-scroll cursor-pointer hover:animate-none">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            loading="lazy"
            className="lg:h-28 h-12 lg:mx-12 mx-1" // Adjust height and spacing as needed
            alt={image.alt}
          />
        ))}
        {/* Duplicate images for continuous scrolling effect */}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image.src}
            loading="lazy"
            className="lg:h-28 h-12 lg:mx-12 mx-1"
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;