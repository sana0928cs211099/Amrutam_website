
const Bestseller = () => {
    const images = [
      { src: 'https://m.media-amazon.com/images/I/61y5ou4dHHL._SX679_.jpg', alt: 'Be Wellbeing' },
      { src: 'https://m.media-amazon.com/images/I/61m0q8uESvL._SL1200_.jpg', alt: 'Choice of Fashion' },
      { src: 'https://m.media-amazon.com/images/I/71yKzLHK81L._SY466_.jpg', alt: 'Deccan Herald' },
      { src: 'https://m.media-amazon.com/images/I/31GPTl83OgL._SX300_SY300_QL70_FMwebp_.jpg', alt: 'Forbes' },
      { src: 'https://m.media-amazon.com/images/I/51TEVgX7e-L._SX522_.jpg', alt: 'GQ' },
      { src: 'https://m.media-amazon.com/images/I/51AjFH0mu4L._SX522_.jpg', alt: 'HuffPost' },
      { src: 'https://m.media-amazon.com/images/I/61DBntluwIL._SX679_.jpg', alt: 'Lifestyle Asia' },
      { src: 'https://m.media-amazon.com/images/I/41y9EisOXfL._SX679_.jpg', alt: 'Livingetc' },
      { src: 'https://m.media-amazon.com/images/I/51xv2SdiEQL._SX522_.jpg', alt: 'Shark Tank' },
      { src: 'https://m.media-amazon.com/images/I/614QDMgEkFL._SX679_.jpg', alt: 'Times of India' },
    ];
  
    return (
    <div className="p-8 bg-[white] mt-14">
             <h1 className="text-center underline underline-offset-1 decoration-4 decoration-zinc-400  text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-20">Best Sellers from AMRUTAM</h1>
      <div className="overflow-hidden whitespace-nowrap mt-20 mb-16">
        <div className="flex animate-scroll cursor-pointer hover:animate-none">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              loading="lazy"
              className="lg:h-80 h-28 lg:mx-12 mx-1" // Adjust height and spacing as needed
              alt={image.alt}
            />
          ))}
          {/* Duplicate images for continuous scrolling effect */}
          {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image.src}
              loading="lazy"
              className="lg:h-80 h-28 lg:mx-12 mx-1"
              alt={image.alt}
            />
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default Bestseller;