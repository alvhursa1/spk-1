'use client'

import { useRouter } from 'next/router';
import { artistsData } from '@/data/artistsData';
import { useEffect, useState } from 'react';

const ArtistDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const selectedArtist = artistsData.find((artist) => artist.id === parseInt(id as string));
      setArtist(selectedArtist);
    }
  }, [id]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl text-white">{artist.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {artist.images.map((image: string, index: number) => (
          <img key={index} src={image} alt={`${artist.name} - image ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetail;
