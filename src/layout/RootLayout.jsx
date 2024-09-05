import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


export default function RootLayout() {
    const location = useLocation();
    
  return (
   <>
   <header className={`${location.pathname === '/login' && 'hidden' || location.pathname === '/register' && 'hidden'}`} >
    <Navbar/>
   </header>
    <main className="min-h-[1200px]" >
        <Outlet/>
    </main>
   </>
  )
}
