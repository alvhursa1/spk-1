'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Artist } from '@/data/artists'

interface ListViewProps {
  artists: Artist[]
}

export default function ListView({ artists }: ListViewProps) {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)

  return (
    <div className="w-full min-h-screen px-[3%]">
      <div className="flex items-center py-4 border-b border-white text-lg">
        <div className="w-1/6 text-left font-broone text-[1.5rem]">#</div>
        <div className="w-1/3 text-right font-broone text-[1.5rem]">Nombre Artista</div>
        <div className="w-1/2 text-right font-broone text-[1.5rem]">Skills</div>
      </div>
      {artists.map((artist) => (
        <div 
          key={artist.id}
          className={`flex items-center py-4 border-b border-white transition-colors duration-300 ${
            hoveredArtist === artist.id ? 'text-white' : hoveredArtist ? 'opacity-20' : ''
          }`}
          onMouseEnter={() => setHoveredArtist(artist.id)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          <div className="w-1/6 text-left font-satoshi-light relative">
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
            <span className="font-satoshi-light text-right">{artist.name}</span>
          </div>
          <div className={`w-1/2 text-right text-[1.125rem] ${
            hoveredArtist === artist.id ? 'font-satoshi-light' : 'font-satoshi-light'
          }`}>
            {artist.skills.join(', ')}
          </div>
        </div>
      ))}
    </div>
  )
}