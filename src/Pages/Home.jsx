import 'react'
import Front from '../Components/Front/Front.jsx';
import Second from '../Components/Front/Second.jsx';
import ImageCarousel from '../Components/Discover/ImageCarousel.jsx';
import Discover from '../Components/Discover/Discover.jsx';
import Consult from '../Components/Consult/Consult.jsx';
import Appointment from '../Components/Appoint/Appointment.jsx';
import Bestseller from '../Components/Discover/Bestseller.jsx';
import Approach from '../Components/Approach/Approach.jsx';
import Testimonials from '../Components/Testimonial/Testimonials.jsx';
import Expert from '../Components/Expert/Expert.jsx';
import Descript from '../Components/Desc/Descript.jsx';

const Home = () => {
  return (
    <div>
          <Front/>
          <Second/>
          <ImageCarousel/>
          <Discover/>
          <Consult/>
          <Appointment/>
          <Bestseller/>
          <Approach/>
          <Testimonials/>
          <Expert/>
          <Descript/>
    </div>
  )
}

export default Home
