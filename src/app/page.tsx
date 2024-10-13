import BannerText from "@/components/BannerText";
import Hder from "@/components/Hder";
import HorizontalScroll from "@/components/HorizontalScroll";
import TextHme1 from "@/components/TextHme1";
import OurArtistsButton from "@/components/OurArtistsButton";
import TextHme2 from "@/components/TextHme2";
import StoreButton from "@/components/StoreButton";
import Fter3 from "@/components/Fter3";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <Hder />
      </div>
      <BannerText />
      <TextHme1 />
      <HorizontalScroll />
      <OurArtistsButton />
      <TextHme2 />
      <StoreButton />
      <Fter3 />
    </div>
  );
}