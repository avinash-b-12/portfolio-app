import React from 'react'
import './portfolioList.scss'
export default function PortfolioList({title, active, setSelected, id}) {
    let activityStatus = active ? 'portfolioList active' : 'portfolioList'
    return (
    <li className={activityStatus} onClick={()=>setSelected(id )}>
        {title}
    </li>
  )
}
