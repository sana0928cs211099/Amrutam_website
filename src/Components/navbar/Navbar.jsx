import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the menu
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [activeLink, setActiveLink] = useState('home'); // State for active link

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Add your form submission logic here
    console.log('Form submitted!');
    setSubmitting(false);
  };

  return (
    <div className="overflow-x-hidden">
      <nav className="bg-cream border-b bg-[#f8f3e7] fixed w-full z-50 top-0 shadow-lg border-gray-300 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-green-800 font-bold ml-2 text-xl">AMRUTAM</div>
          <div className="hidden md:flex space-x-11 text-lg font-bold">
    
            <Link to={'/'} className={`text-[#22834c] hover:text-[#e64040] ${activeLink === 'home' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('home')}>
              Home
            </Link>

            <Link to={'/doc'} className={`text-[#22834c] hover:text-[#e64040] ${activeLink === 'find-doctors' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('find-doctors')}>
              Find Doctors
            </Link>

            {/* <Link to={'/'} className={`text-[#22834c] hover:text-[#e64040] ${activeLink === 'about-us' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('about-us')}>
              About Us
            </Link> */}

          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#22834c] ml-28">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              className="bg-[#22834c] hover:bg-[white] hidden md:flex hover:text-[#22834c] border-2 border-green-500 text-white px-4 py-2 rounded-full"
              onClick={() => setShowModal(true)}
            >
              Signup/Login
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-12 z-30 fixed bg-[#f8f3e7] w-full border-b border-gray-300 py-4">
          <div className="flex flex-col text-base font-medium items-center">

          <Link to={'/'} className={`text-[#22834c] hover:text-[#e64040] mb-4 ${activeLink === 'home' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('home')}>
              Home
            </Link>

            <Link to={'/doc'} className={`text-[#22834c] hover:text-[#e64040] mb-4 ${activeLink === 'find-doctors' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('find-doctors')}>
              Find Doctors
            </Link>

            {/* <Link to={'/'} className={`text-[#22834c] hover:text-[#e64040] mb-4 ${activeLink === 'about-us' ? 'text-red-500' : ''}`}
              onClick={() => setActiveLink('about-us')}>
              About Us
            </Link> */}

            <button
              className="bg-[#22834c] hover:bg-[white] hover:text-[#22834c] text-sm border-2 border-green-500 text-white px-4 py-2 rounded-full"
              onClick={() => setShowModal(true)}
            >
              Signup/Login
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#d1dad2] opacity-95 p-8 rounded-lg shadow-lg w-64 md:w-96">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">{isLogin ? 'Login' : 'Signup'}</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="font-semibold">
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#22834c] hover:bg-[white] hover:text-[#22834c] border-2 border-green-500 text-white text-lg font-semibold py-2 rounded-lg"
              >
                {isLogin ? 'Login' : 'Signup'}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                className="text-[#727872] font-bold"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Create an account' : 'Already have an account? Login'}
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                disabled={submitting}
                className="w-full bg-[white] hover:bg-[#22834c] hover:text-[white] border-2 border-green-500 text-[#22834c] py-2 rounded-lg text-lg font-semibold flex items-center justify-center"
              >
                <i className="fab fa-google mr-2"></i> {isLogin ? 'Login' : 'Signup'} with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;