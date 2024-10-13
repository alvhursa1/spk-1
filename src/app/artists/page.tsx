import StoreButton2 from '@/components/StoreButton2';
import Fter3 from '@/components/Fter3';
import React from 'react';
import HderLets from '@/components/HderLets';
import BnnerArtists from '@/components/BnnerArtists';

const ArtistsPage: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <HderLets />
      </div>
      <BnnerArtists />
        <StoreButton2 />  
        <Fter3 />
    </div>
  );
};

export default ArtistsPage;
