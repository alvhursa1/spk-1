'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ViewToggleProps {
  currentView: 'grid' | 'list'
  onViewChange: (view: 'grid' | 'list') => void
}

export default function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  const [isHoveredGrid, setIsHoveredGrid] = useState(false)
  const [isHoveredList, setIsHoveredList] = useState(false)
  const [isHoveredEnquire, setIsHoveredEnquire] = useState(false)
  const enquireButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const enquireButton = enquireButtonRef.current

    if (enquireButton) {
      ScrollTrigger.create({
        trigger: enquireButton,
        start: 'top top',
        endTrigger: '#artist-gallery-end',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(enquireButton, { 
            position: 'fixed',
            top: '10px',
            right: '3%',
            zIndex: 60,
            duration: 0.3 
          })
        },
        onLeaveBack: () => {
          gsap.to(enquireButton, { 
            position: 'absolute',
            top: '0',
            right: '3%',
            zIndex: 60,
            duration: 0.3 
          })
        },
        onLeave: () => {
          gsap.to(enquireButton, { 
            opacity: 0,
            duration: 0.3 
          })
        },
        onEnterBack: () => {
          gsap.to(enquireButton, { 
            opacity: 1,
            duration: 0.3 
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleViewChange = (view: 'grid' | 'list') => {
    onViewChange(view)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      console.log(`${view} view clicked in mobile view`)
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center pl-[3%] pr-[3%] mt-10 -mb-8">
        <div className="flex space-x-16">
          {['grid', 'list'].map((view) => (
            <div
              key={view}
              className={`flex flex-col items-center relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group ${
                currentView === view ? 'bg-black' : ''
              }`}
              onMouseEnter={() => view === 'grid' ? setIsHoveredGrid(true) : setIsHoveredList(true)}
              onMouseLeave={() => view === 'grid' ? setIsHoveredGrid(false) : setIsHoveredList(false)}
              onClick={() => handleViewChange(view as 'grid' | 'list')}
            >
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                  (view === 'grid' ? isHoveredGrid : isHoveredList) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              />
              <span className="hidden md:block absolute left-full ml-2 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out opacity-100 translate-x-0">
                {view === 'grid' ? 'Grid' : 'List'}
              </span>
            </div>
          ))}
        </div>
        <Link
          ref={enquireButtonRef}
          href="/enquire-to-purcharse"
          className="flex items-center justify-center bg-black rounded-full px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out z-60"
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
    </div>
  )
}