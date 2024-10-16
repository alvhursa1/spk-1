'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function AboutGalleryImg() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        setScrollPosition(-top)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const images = [
    '/images/about1.png',
    '/images/about2.png',
    '/images/about3.png',
    '/images/about4.png',
    '/images/about5.png',
    '/images/about6.png',
  ]

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row min-h-[300vh]">
      <div className="w-full md:w-1/2 pl-[3%] py-[2%] sticky top-0 h-screen overflow-hidden">
        <div 
          className="flex flex-col transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`About image ${index + 1}`}
              width={800}
              height={600}
              className="w-full object-cover mb-4"
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 relative">
        <div className="sticky top-0 pt-[2%]">
          <h2 className="font-broone text-1rem mb-4">Since 2021</h2>
          <p className="font-satoshi-light text-1rem mb-4 transition-opacity duration-500 ease-in-out"
             style={{ opacity: scrollPosition > 0 ? 1 : 0 }}>
            By pioneering new business models to rejuvenate and expand the artistic community, we are unlocking new opportunities for artists and art enthusiasts across the world.
          </p>
          <p className="font-satoshi-light text-1rem mb-4 transition-opacity duration-500 ease-in-out"
             style={{ opacity: scrollPosition > window.innerHeight ? 1 : 0 }}>
            By pushing boundaries and redefining the norms, we are opening doors to a thriving and dynamic future for the art world.
          </p>
          <p className="font-satoshi-light text-1rem transition-opacity duration-500 ease-in-out"
             style={{ opacity: scrollPosition > window.innerHeight * 2 ? 1 : 0 }}>
            Providing solid opportunities for talented illustrators and to bridge the gap between their creativity and an international market eager for fresh and authentic voices.
          </p>
        </div>
      </div>
    </div>
  )
}