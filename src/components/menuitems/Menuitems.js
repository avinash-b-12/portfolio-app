import React from 'react'
import './menuitems.scss'

export default function Menuitems({menuOpen,setMenuOpen,direct,directPage}) {
  return (
    <li onClick={()=>setMenuOpen(false)}>
        <a href={directPage}>{direct}</a>
    </li>
  )
}
