import './Intro.scss'
import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Full Stack', 'Front End', 'Back End'],
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hello, my name is </h3>
          <h2>Siwar</h2>
          <h4>I am a </h4>
          <h2>
            <span ref={textRef} style={{ color: 'crimson' }}></span> Web
            Developer
          </h2>
        </div>
        <a href="#projects">
          <img src="img/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
