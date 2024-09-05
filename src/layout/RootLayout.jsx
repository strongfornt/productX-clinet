import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


export default function RootLayout() {
    const location = useLocation();
    
  return (
   <>
   <header className={`${location.pathname === '/login' && 'hidden' || location.pathname === '/register' && 'hidden'}`} >
    <Navbar/>
   </header>
    <main  >
        <Outlet/>
    </main>

    <footer className={`${location.pathname === '/login' && 'hidden' || location.pathname === '/register' && 'hidden'}`}>
        <Footer/>
    </footer>
   </>
  )
}
