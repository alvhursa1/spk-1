'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';

const Example = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase">
        </span>
      </div >
      {isClient && <HorizontalScrollCarousel/>}
      <div className="flex items-center justify-center">
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const carouselPadding = { start: 32, end: 64 };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalWidth = cards.reduce((acc, card) => {
    const aspectRatio = card.width / card.height;
    let containerWidth = 450;
    if (aspectRatio > 1) {
      containerWidth = 450 * aspectRatio;
    } else if (aspectRatio < 1) {
      containerWidth = 330;
    }
    return acc + containerWidth + 16;
  }, 0) + carouselPadding.start + carouselPadding.end;

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalWidth - windowWidth}px`]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-6 bottom-10 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div style={{ width: `${carouselPadding.start}px`, flexShrink: 0 }} />
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
          <div className="flex items-center just">
            {/* Este comentario se mantiene igual */}
          </div>
          <div style={{ width: `${carouselPadding.end}px`, flexShrink: 0 }} />
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    url: string;
    title: string;
    id: number;
    width: number;
    height: number;
  };
}

const Card = ({ card }: CardProps) => {
  const aspectRatio = card.width / card.height;
  let containerWidth = 450;
  let containerHeight = 450;

  if (aspectRatio > 1) {
    containerHeight = 450;
    containerWidth = 450 * aspectRatio;
  } else if (aspectRatio < 1) {
    containerWidth = 330;
    containerHeight = 330 / aspectRatio;
  }

  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200 flex justify-center items-center"
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      <Image
        src={card.url}
        alt={`Image ${card.id}`}
        fill
        style={{ objectFit: 'cover' }}
        sizes={`(max-width: 768px) 100vw, ${containerWidth}px`}
      />
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-1.webp",
    title: "Title 1",
    id: 1,
    width: 666,
    height: 1000,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-2.webp",
    title: "Title 2",
    id: 2,
    width: 721,
    height: 900,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-3.webp",
    title: "Title 3",
    id: 3,
    width: 635,
    height: 900,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-4.webp",
    title: "Title 4",
    id: 4,
    width: 719,
    height: 930,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-5.webp",
    title: "Title 5",
    id: 5,
    width: 811,
    height: 1018,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-6.webp",
    title: "Title 6",
    id: 6,
    width: 800,
    height: 498,
  },
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-7.webp",
    title: "Title 7",
    id: 7,
    width: 744,
    height: 930,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-8.webp ",
    title: "Title ",
    id: 8,
    width: 628,
    height: 987,
  },
  
  {
    url: "/images/carrusel-home/carrusel-home-spektrum-9.webp",
    title: "Title ",
    id: 9,
    width: 668,
    height: 935,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-10.webp",
    title: "Title ",
    id: 10,
    width: 714,
    height: 1000,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-11.webp ",
    title: "Title ",
    id: 11,
    width: 609,
    height: 920,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-12.webp ",
    title: "Title ",
    id: 12,
    width: 669,
    height: 1000,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-13.webp ",
    title: "Title ",
    id: 13,
    width: 710,
    height: 918,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-14.webp",
    title: "Title ",
    id: 14,
    width: 600,
    height: 840,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-15.webp ",
    title: "Title ",
    id: 15,
    width: 700,
    height: 700,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-16.webp",
    title: "Title ",
    id: 16,
    width: 800,
    height: 618,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-17.webp",
    title: "Title ",
    id: 17,
    width: 757,
    height: 959,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-18.webp ",
    title: "Title ",
    id: 18,
    width: 736,
    height: 920,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-19.webp ",
    title: "Title ",
    id: 19,
    width: 940,
    height: 940,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-20.webp ",
    title: "Title ",
    id: 20,
    width: 650,
    height: 910,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-21.webp ",
    title: "Title ",
    id: 21,
    width: 650,
    height: 890,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-22.webp ",
    title: "Title ",
    id: 22,
    width: 623,
    height: 924,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-23.webp ",
    title: "Title ",
    id: 23,
    width: 800,
    height: 800,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-24.webp ",
    title: "Title ",
    id: 24,
    width: 840,
    height: 840,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-25.webp ",
    title: "Title ",
    id: 25,
    width: 743,
    height: 891,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-26.webp ",
    title: "Title ",
    id: 26,
    width: 900,
    height: 900,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-27.webp ",
    title: "Title ",
    id: 27,
    width: 600,
    height: 878,
  },

  {
    url: "/images/carrusel-home/carrusel-home-spektrum-28.webp ",
    title: "Title ",
    id: 28,
    width: 1920,
    height: 792,
  },

];