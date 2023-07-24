import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <header className='header'>
        <nav className='nav container'>
          <a href='#home' className='nav_logo'><i class='bx bx-home-alt' ></i> V8 Auto</a>
            <ul className='nav_list grid'>
              <li>
                <a href='#service' className='nav_link'>Services</a>
              </li>

              <li>
                <a href='#findus' className='nav_link'>Find Us</a>
              </li>

              <li>
                <a href='#login' className='nav_link'>Log in</a>
              </li>
            </ul>
          </nav>
    </header> 
  )
}
