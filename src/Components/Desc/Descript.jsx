
const Descript = () => {
  return (
    <div className="bg-[#f8f3e8] flex items-center justify-center">

       {/* destop version  */}
      <div className="hidden md:block container mx-auto px-4 py-8  h-[70vh]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#4a7c12] mb-4">
              Amrutam Home App
            </h1>
            <p className="text-gray-700 mb-4">
              The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
            </p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
            </p>
            <p className="text-xl font-bold text-gray-900 mb-4">
              Get The App Now
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a className="inline-block" href="#">
                <img
                  alt="Get it on Google Play"
                  className="h-12"
                  src="https://amrutam.global/googlePlay.webp"
                  width="150"
                />
              </a>
              <a className="inline-block" href="#">
                <img
                  alt="Download on the App Store"
                  className="h-12"
                  src="https://amrutam.global/appStore.webp"
                  width="150"
                />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 h-[50vh] flex justify-center">
            <img
              alt="App Screenshot showing the Amrutam Home App interface"
              className="w-3/4 md:w-full transform transition-transform duration-300 animate-flipY"
              src="https://amrutam.global/iPhone13.webp"
              width="300"
            />
          </div>
        </div>
      </div>

      {/* mobile version  */}
      <div className="bg-[#f8f3e8] md:hidden p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-green-800 text-center text-2xl font-bold mb-4">
          Amrutam Home App
        </h1>
        <p className="text-gray-700 text-sm mb-6">
          The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.
        </p>
        <div className="flex justify-center">
        <img
              alt="App Screenshot showing the Amrutam Home App interface"
              className="w-60 md:w-full transform transition-transform duration-300 animate-flipY"
              src="https://amrutam.global/iPhone13.webp"
              width="300"
            />
        </div>
        <div className="border-2 border-blue-500 p-4 bg-cream text-center">
                <p className="text-gray-700 text-sm mb-6">Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe</p>
                <h1 className="text-xl font-bold mb-4">Get The App Now</h1>
                <div className="mb-4">
                    <img src="https://amrutam.global/googlePlay.webp" alt="Get it on Google Play" className="mx-auto h-16 mb-4" />
                </div>
                <div>
                    <img src="https://amrutam.global/appStore.webp" alt="Download on the App Store" className="mx-auto h-16" />
                </div>
            </div>
      </div>
    </div>
  );
};

export default Descript;