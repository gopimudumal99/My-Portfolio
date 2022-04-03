import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
function Navbar() {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">Gopi Mudumal</div>
              <Toggle/>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul>
                      <li>Home</li>
                      <li>Proficency</li>
                      <li>Projects</li>
                  </ul>
              </div>
              <button className='button n-button'>Contact</button>
              </div>
    </div>
  )
}

export default Navbar