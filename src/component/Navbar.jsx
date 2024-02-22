import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="flex bg-[#FFF7ED] shadow-lg justify-between p-6 sticky top-0 w-full">
                <div>
                    <NavLink to="/home">
                        <img src={logo} alt="" srcset="" width={100} />
                    </NavLink>
                </div>
                <div className="flex gap-5">
                    <NavLink to="/host">
                        <div style={{ color: 'black', fontWeight: '600' }} className={({ isActive }) => (isActive ? 'text-blue-600' : null)}>
                            Host
                        </div>
                    </NavLink>
                    <NavLink to="/about">
                        <div style={{ color: 'black', fontWeight: '600' }} className={({ isActive }) => (isActive ? 'text-blue-600' : null)}>
                            About
                        </div>
                    </NavLink>
                    <NavLink to="/van">
                        <div style={{ color: 'black', fontWeight: '600' }} className={({ isActive }) => (isActive ? 'text-blue-600' : null)}>
                            Vans
                        </div>
                    </NavLink>
                    {/* <NavLink to="/signup">

                        <div style={{ color: 'black', fontWeight: '600' }} className={({ isActive }) => (isActive ? 'text-blue-600' : null)}>
                            Signup
                        </div>
                    </NavLink> */}

                </div>
            </nav>
        </>
    )
}

export default Navbar