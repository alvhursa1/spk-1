import BannerText from "@/components/Home/BannerText";
import Hder from "@/components/HeadFooter/Hder";
import TextHme1 from "@/components/Home/TextHme1";
import OurArtistsButton from "@/components/Buttons/OurArtistsButton";
import TextHme2 from "@/components/Home/TextHme2";
import StoreButton from "@/components/Buttons/StoreButton";
import Fter3 from "@/components/HeadFooter/Fter3";
import HorizScrollHome from "@/components/Home/HorizScrollHome";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <Hder />
      </div>
      <BannerText />
      <TextHme1 />
      <HorizScrollHome />
      <OurArtistsButton />
      <TextHme2 />
      <StoreButton />
      <Fter3 />
    </div>
  );
}