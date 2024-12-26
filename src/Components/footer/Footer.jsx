import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (

        
        <div className="p-8 bg-[#dce3dc] lg:h-[45vh]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#2e4e1e]">
                <div> 
                    <h2 className="font-bold lg:text-2xl text-xl mb-4">Get in touch</h2>
                    <p className="text-sm lg:text-base">support@amrutam.co.in</p>
                    <p className="text-sm lg:text-base">
                        Amrutam Pharmaceuticals Pvt Ltd.,<br />
                        chitragupt ganj, Nai Sadak, Lashkar,<br />
                        Gwalior - 474001
                    </p>
                    <p className="text-sm lg:text-base">+91 9713171999</p>
                    <div className="lg:flex hidden space-x-2 mt-4">
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaPinterestP />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaYoutube />
                        </a>
                    </div>

                    <div className="flex lg:hidden space-x-2 mt-4">
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaFacebookF size={10} />
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaTwitter size={10}/>
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaInstagram size={10}/>
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaLinkedinIn size={10}/>
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaPinterestP size={10}/>
                        </a>
                        <a href="#" className="bg-[#2e4e1e] text-white p-2 rounded-full">
                            <FaYoutube size={10} />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold lg:text-2xl text-xl mb-4">Information</h2>
                    <ul className="text-sm lg:text-base">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy for Mobile Apps</a></li>
                        <li><a href="#" className="hover:underline">Shipping and Returns Policy</a></li>
                        <li><a href="#" className="hover:underline">International Delivery</a></li>
                        <li><a href="#" className="hover:underline">For Businesses, Hotels and Resorts</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold lg:text-2xl text-xl mb-4">Newsletter</h2>
                    <p className="text-sm lg:text-base">Subscribe to our Newsletter and join Amrutam Family today!</p>
                    <div className="mt-4 flex">
                        <input type="email" placeholder="Your email address" className="p-2 border border-gray-300 rounded-l-full w-full" />
                        <button className="bg-[#2e4e1e] text-white p-2 rounded-r-full">Subscribe</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;