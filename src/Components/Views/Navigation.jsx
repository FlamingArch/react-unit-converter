import React, { useState } from 'react'

const Navigation = ({ items, children }) => {
    const [page, setPage] = useState(0);

    return (
        <div className='app-split'>
            <NavBar>
                {items.map((item, index) => (
                    <NavBarItem
                        icon={item.icon}
                        label={item.label}
                        key={index}
                        active={page === index}
                        onclick={() => setPage(index)}
                    />
                ))}
            </NavBar>
            <p>Sup</p>
            {/* {children[page]} */}
        </div>
    )
}

export default Navigation

const NavBar = ({ children }) => {
    return (
        <div className='navbar'>
            <div className="logo"></div>
            <div className="nav-section">
                {children}
            </div>
            <div className="extra"></div>
        </div>
    )
}
const NavBarItem = ({ icon, label, active, onclick, hideUnactiveLabel }) => {
    return (
        <div className='navbaritem' onClick={onclick}>
            <div className={`icon-container ${active ? 'active' : ''}`}>
                <img className='icon' src={icon} alt="" />
            </div>
            <p className={`label ${active ? 'active' : ''} ${hideUnactiveLabel ? 'hideUnactiveLabel' : ''}`}>{label}</p>
        </div>
    )
}
