import React from "react";
import HderWork from "../../components/HeadFooter/HderWork";
import WorkBannerText from "../../components/Work/WorkBannerText";
import Fter3 from "../../components/HeadFooter/Fter3";
import WorkGallery from "@/components/Work/WorkGallery";
import WorkGalleryCuad from "@/components/Work/WorkGalleryCuad";

const Work = () => {
  return (
    <div>
      <HderWork />
      <WorkBannerText />
      <WorkGallery />
      <WorkGalleryCuad />
      <Fter3 />
    </div>
  );
};

export default Work;