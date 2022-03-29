import React from 'react'
import Menuitems from '../menuitems/Menuitems'
import './menu.scss'
/*
<li onClick={()=>setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
*/
export default function Menu({menuOpen, setMenuOpen}) {
    let menuStatus = 'menu ' + (menuOpen && 'active')
    return (
    <div className={menuStatus}>
        <ul>            
            <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} direct='Home' directPage='#intro'/>
            <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} direct='Portfolio' directPage='#portfolio'/>
            <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} direct='Works' directPage='#works'/>
            <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} direct='Testimonials' directPage='#testimonials'/>
            <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} direct='Contact' directPage='#contact'/>
        </ul>
    </div>
  )
}
