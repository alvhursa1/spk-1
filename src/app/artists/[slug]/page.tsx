'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const artists = [
  { id: '01', name: 'Juana Vargas', image: 'juana1.png', skills: ['Photography', 'Digital Art'] },
  { id: '02', name: 'Ana María Alarcón', image: 'ana1.png', skills: ['Painting', 'Sculpture'] },
  // ... (add all artists)
]

export default function ArtistPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((a) => a.name.toLowerCase().replace(/\s+/g, '-') === params.slug)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll('img')
      gsap.fromTo(
        images,
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      )
    }
  }, [])

  if (!artist) {
    return <div>Artist not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-broone mb-4">{artist.name}</h1>
      <p className="text-xl font-satoshi-light mb-8">{artist.skills.join(', ')}</p>
      <div ref={containerRef} className="flex overflow-x-auto space-x-4 pb-4">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src={`/images/${artist.image.replace('.png', `-${index + 1}.png`)}`}
            alt={`${artist.name} artwork ${index + 1}`}
            width={400}
            height={600}
            className="flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  )
}