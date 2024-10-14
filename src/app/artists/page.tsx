'use client';

import StoreButton2 from '@/components/StoreButton2';
import Fter3 from '@/components/Fter3';
import HderLets from '@/components/HderLets';
import BnnerArtists from '@/components/BnnerArtists';
import ArtistGallery from '@/components/Gallery2/ArtistGallery';

const ArtistsPage: React.FC = () => {

  return (
    <div>
      {/* Header fijo en la parte superior */}
      <div className="absolute top-0 left-0 w-full z-50">
        <HderLets />
      </div>
      <BnnerArtists />
      <ArtistGallery />
      <StoreButton2 />
      <Fter3 />
    </div>
  );
};

export default ArtistsPage;
