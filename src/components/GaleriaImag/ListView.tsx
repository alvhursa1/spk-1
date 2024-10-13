'use client'

import React from 'react';
import { artistsData } from '@/data/artistsData';

const ListView: React.FC = () => {
  return (
    <div className="p-4">
      {artistsData.map((artist) => (
        <div key={artist.id} className="grid grid-cols-3 gap-4 border-b border-white py-4">
          <div className="text-white">#{artist.id}</div>
          <div className="text-white">{artist.name}</div>
          <div className="text-white">{artist.skills || 'Habilidades no especificadas'}</div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
