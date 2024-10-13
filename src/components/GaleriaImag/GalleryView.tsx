'use client';

import React from 'react';
import { artistsData } from '@/data/artistsData';

const GalleryView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] p-2">
      {artistsData.map((artist) => (
        <div key={artist.id} className="relative group">
          <img src={artist.images[0]} alt={artist.name} className="w-full h-auto object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
            #{artist.id} - {artist.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryView;
