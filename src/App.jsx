import 'tailwindcss/tailwind.css';
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home';
import FindDoc from './Pages/FindDoc';
import Profile from './Pages/Profile';

const App = () => {

    const router = createBrowserRouter([
          
          {
            path:'/',
            element: <><Navbar/><Home/></>
          },{
            path:'/doc',
            element:<><Navbar/><FindDoc/></>
          },{
            path:'/profile/:id',
            element:<><Navbar/><Profile/></>
          }

    ])

    return (
        <div className="bg-white">
        <RouterProvider router={router}/>
        <Outlet/>
        <Footer/>

        </div>
    );
};

export default App