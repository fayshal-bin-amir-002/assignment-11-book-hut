import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'border-b-[3px] pb-1 border-[#41B06E]' : 'pb-1'}>Home</NavLink></li>
        <li><NavLink to="/all-books" className={({ isActive }) => isActive ? 'border-b-[3px] pb-1 border-[#41B06E]' : 'pb-1'}>All Books</NavLink></li>
        <li><NavLink to="/add-book" className={({ isActive }) => isActive ? 'border-b-[3px] pb-1 border-[#41B06E]' : 'pb-1'}>Add Book</NavLink></li>
        <li><NavLink to="borrowed-books" className={({ isActive }) => isActive ? 'border-b-[3px] pb-1 border-[#41B06E]' : 'pb-1'}>Borrowed Books</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#FFF5E0] bg-opacity-90 rounded-full my-5 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown flex lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="space-y-2 menu-sm dropdown-content mt-12 z-[1] p-2 shadow bg-[#FFF5E0] rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn bg-transparent hover:bg-transparent shadow-none border-none text-xl lg:text-2xl hidden lg:flex gap-0">Book <span className="text-[#41B06E]">Hut</span></Link>
            </div>
            <div className="navbar-center">
                <Link className="btn bg-transparent hover:bg-transparent shadow-none border-none text-xl lg:text-2xl flex gap-0 lg:hidden">Book <span className="text-[#41B06E]">Hut</span></Link>
                <ul className="hidden lg:flex items-center justify-center gap-8 text-lg font-semibold">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="w-12 rounded-full overflow-hidden border-4 border-[#8DECB4]">
                    <img className="rouned-full " alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    );
};

export default NavBar;