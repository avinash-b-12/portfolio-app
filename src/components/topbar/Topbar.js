import React from 'react'
import './topbar.scss'
import {Person,Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
  let topbarStatus = 'topbar ' + (menuOpen && 'active')
  return (
    <div className={topbarStatus}>
      <div className='wrapper'>
        <div className='left'>
          <a href="#intro" className='logo'>portfolio.</a>
          <div className='itemContainer'>
              <Person className='icon'/>
              <span>+91 70102 54787</span>
          </div>
          <div className='itemContainer'>
              <Mail className='icon'/>
              <span>avinashchandhan@gmail.com</span>
          </div>
        </div>

        <div className='right'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
