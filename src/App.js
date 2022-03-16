import logo from './resources/svg/logo.svg';
import frame from './resources/svg/frame.svg';
import holo from './resources/img/holo-bg.png'
import './App.css'
import { NameClipPath } from './nameClipPath';
import { useRef, useEffect, useState } from 'react';
import { interpolate } from './logic/utils'
import { useDeviceOrientation } from './logic/device-orientation-hook';

function App() {
  const logoSvg = useRef(null)
  const [orientation] = useDeviceOrientation()

  useEffect(() => {
    if(!logoSvg.current) return
    let x = interpolate(orientation.alpha, -20, 20, 0, 100)
    let y = interpolate(orientation.beta, -20, 20, 0, 100)
    logoSvg.current.style.backgroundPosition = `${x}% ${y}%`
  }, [logoSvg, orientation])
  
  return (
    <div className='home-screen'>
      <img className='holo-bg' ref={logoSvg}/>
      <NameClipPath/>
    </div>
  )
}

export default App;
