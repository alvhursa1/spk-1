import React from 'react';
import EnqBannerText from '@/components/Enquire/EnqBannerText'; 
import HderEnquire from '@/components/HeadFooter/HderEnquire';
import FterEnquire from '@/components/HeadFooter/FterEnquire';

const EnquireToPurchasePage: React.FC = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <HderEnquire />
      </div>
      <EnqBannerText />
      <FterEnquire />
    </div>
  );
};

export default EnquireToPurchasePage;