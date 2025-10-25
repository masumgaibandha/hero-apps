import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    `px-2 py-1 transition ${
      isActive
        ? 'underline underline-offset-8 decoration-2 decoration-[#632ee3]'
        : 'hover:underline hover:underline-offset-8'
    }`;

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex items-center container mx-auto">
        <div className="navbar-start gap-2">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48">
              <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
              <li><NavLink to="/apps" className={activeLink}>Apps</NavLink></li>
              <li><NavLink to="/installation" className={activeLink}>Installation</NavLink></li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
            <img src="https://i.ibb.co/Tqgz2vKX/logo.png" alt="" className="w-[40px]" />
            <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold">HERO.IO</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
            <li><NavLink to="/apps" className={activeLink}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={activeLink}>Installation</NavLink></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/masumgaibandha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-[4px] border-0 text-white gap-2 bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] hover:opacity-90"
          >
            <img src="https://i.ibb.co/dwS1fJBW/fi-2111432.png" alt="Git" className="w-5" />
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;