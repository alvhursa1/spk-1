'use client'


import { useState, useRef } from 'react'
import BnnerImageSmoot2 from '../Home/BnnerImageSmoot2'




export default function BannerText() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const bannerRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      })
    }
  }

  return (
 
      <div className="relative w-full h-[100vh] inset-0 z-0" onMouseMove={handleMouseMove} ref={bannerRef}>
        <BnnerImageSmoot2 mousePosition={mousePosition} />
      </div>

  )
}
