import React, { useState } from 'react';
import './navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality here
  };

  return (
    <div className='navbar'>
        <div className="logo">
          <img src="logo.png" alt="azzain logo" />
          <span>Azzain Ink</span>
        </div>
        <div className="icons">
          <div className="user">
            <img             
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user icon" /> 
             <span>Omar</span>
          </div>
          <div className="settings" onClick={handleSettingsClick}>
            <img src="/settings.svg" alt="settings icons" />
            {menuOpen && (
              <div className="menu">
                <ul>
                  <li onClick={handleLogout}>Logout</li>
                  {/* Add more menu items as needed */}
                </ul>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

export default Navbar;
