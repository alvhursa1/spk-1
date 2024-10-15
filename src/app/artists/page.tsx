'use client';

import StoreButton2 from '@/components/Buttons/StoreButton2';
import Fter3 from '@/components/HeadFooter/Fter3';
import HderLets from '@/components/HeadFooter/HderLets';
import BnnerArtists from '@/components/Artists/BnnerArtists';
import ArtistGallery from '@/components/Artists/Gallery/ArtistGallery';

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
