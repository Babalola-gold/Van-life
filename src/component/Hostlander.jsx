import React from 'react'
import { NavLink } from 'react-router-dom';

const Hostlander = () => {

    const hostLink = [
        {
            path: '/host',
            title: 'Dashboard'
        },
        {
            path: '/host/income',
            title: 'Income'
        },
        {
            path: '/host/van',
            title: 'Vans'
        },
        {
            path: '/host/reviews',
            title: 'Reviews'
        },
    ];
    return (
        <>
            <nav className="flex gap-7 p-10 " >
                {hostLink.map((link, i) => (
                    <NavLink
                        to={link.path}
                        key={i}
                        className={({ isActive }) => isActive && link.path !== "/host" ? "underline font-bold" : ""}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </nav>
        </>
    )
}

export default Hostlander