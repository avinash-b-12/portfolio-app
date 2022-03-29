import React from 'react'
import {useEffect, useRef} from 'react'
import './intro.scss'
import {init} from 'ityped'

export default function Intro() {
  const textRef = useRef()
  
  useEffect(()=>{
    init(
      textRef.current,{
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Developer", "Designer"]
      }
    )
  },[])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='images/me.png' alt=''/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm </h2>
          <h1>Avinash Chandhan</h1>
          <h3>Front-end <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='images/down.png' alt='' />
        </a>
      </div>
    </div>
  )
}
