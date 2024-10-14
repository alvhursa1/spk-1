'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Artist } from '@/data/artists'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

interface ListViewProps {
  artists: Artist[]
}

export default function ListView({ artists }: ListViewProps) {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)
  const [isHoveredEnquire, setIsHoveredEnquire] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastArtistRef = useRef<HTMLDivElement>(null)
  const enquireButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const lastArtist = lastArtistRef.current
    const enquireButton = enquireButtonRef.current

    if (container && lastArtist && enquireButton) {
      gsap.set(enquireButton, { autoAlpha: 0, y: 20 })

      ScrollTrigger.create({
        trigger: container,
        start: 'top top+=100',
        end: () => `bottom-=${lastArtist.offsetHeight} top`,
        onEnter: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          })
        },
        onLeave: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          })
        },
        onEnterBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          })
        },
        onLeaveBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full min-h-screen px-[3%] relative">
      <div className="flex items-center py-4 border-b border-white text-lg">
        <div className="w-1/6 text-left font-broone text-[1.125rem]">#</div>
        <div className="w-1/3 text-right font-broone text-[1.125rem]">Nombre Artista</div>
        <div className="w-1/2 text-right font-broone text-[1.125rem]">Skills</div>
      </div>
      {artists.map((artist, index) => (
        <div 
          key={artist.id}
          ref={index === artists.length - 1 ? lastArtistRef : null}
          className={`flex items-center py-4 border-b border-white transition-colors duration-300 ${
            hoveredArtist === artist.id ? 'text-white' : hoveredArtist ? 'opacity-20' : ''
          }`}
          onMouseEnter={() => setHoveredArtist(artist.id)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          <div className="w-1/6 text-left font-satoshi-light text-[1rem] relative">
            {artist.id}
          </div>
          <div className="w-1/3 flex items-center justify-end">
            {hoveredArtist === artist.id && (
              <div className="absolute left-[16.67%] w-48 h-48 z-10">
                <Image
                  src={`/images/${artist.images[0]}`}
                  alt={`${artist.name}'s work`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <span className="font-satoshi-light text-right text-[1rem]">{artist.name}</span>
          </div>
          <div className="w-1/2 text-right text-[1rem] font-satoshi-light">
            {artist.skills.join(', ')}
          </div>
        </div>
      ))}
      <Link
        ref={enquireButtonRef}
        href="/enquire"
        className="fixed top-[10px] right-[3%] flex items-center justify-center bg-black rounded-full px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out z-50"
        onMouseEnter={() => setIsHoveredEnquire(true)}
        onMouseLeave={() => setIsHoveredEnquire(false)}
      >
        <div
          className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out"
        >
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
              isHoveredEnquire ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
        </div>
        <span className="ml-2 whitespace-nowrap text-[1.125rem] font-broone text-white">
          Enquire to purchase
        </span>
      </Link>
    </div>
  )
}