import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className={`flex h-screen overflow-y-hidden gap-3 bg_image`}>
        <aside className={`hidden md:block w-72 overflow-y-auto bg-gray-950 text-white
             h-screen shrink-0`}>
            <Sidebar/>
        </aside>
        <main className='flex-1 overflow-y-auto h-screen'>
            <Navbar/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout