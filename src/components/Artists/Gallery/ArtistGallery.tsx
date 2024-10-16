'use client'

import React, { useState, useEffect } from 'react'
import { artists } from '@/data/artists'
import GridView from '@/components/Artists/Gallery/GridView'
import ListView from '@/components/Artists/Gallery/ListView'
import ViewToggle from '@/components/Artists/Gallery/ViewToogle'
import { gsap } from 'gsap'

type View = 'grid' | 'list'

export default function ArtistGallery() {
  const [view, setView] = useState<View>('grid')

  useEffect(() => {
    gsap.to('.view-container', { opacity: 1, duration: 0.3 })
  }, [])

  const handleViewChange = (newView: View) => {
    gsap.to('.view-container', {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setView(newView)
        gsap.to('.view-container', {
          opacity: 1,
          duration: 0.3
        })
      }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ViewToggle currentView={view} onViewChange={handleViewChange} />
      <div className="view-container mt-20 opacity-0">
        {view === 'grid' ? <GridView artists={artists} /> : <ListView artists={artists} />}
      </div>
      <div id="artist-gallery-end" />
    </div>
  )
}