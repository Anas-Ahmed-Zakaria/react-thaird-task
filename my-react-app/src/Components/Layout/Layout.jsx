import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
//import Men from '../Men/Men';
//import Women from '../Women/Women';
import { Outlet } from 'react-router-dom';
//import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
