import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Krishna</a>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon">
                 Home
                </i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link active-link">
                <i className="uil uil-user nav_icon">
                 About
                </i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link active-link">
                <i className="uil uil-file-alt nav_icon">
                Skills
                </i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link active-link">
                <i className="uil uil-briefcase-alt nav_icon">
                Services
                </i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav_link active-link">
                <i className="uil uil-scenery nav_icon">
                Portfolio
                </i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link active-link">
                <i className="uil uil-message nav_icon">
                Contact
                </i>
              </a>
            </li>
              
          </ul>
          <i class="uil uil-times nav_close"></i>
        </div>
        <div className="nav_toggle">
        <i class="uil uil-apps"></i>

        </div>
      </nav>
    </header>
  )
}

export default Header