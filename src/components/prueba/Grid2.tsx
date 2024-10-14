'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Artist } from '@/data/artists';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ImageDimensions {
  width: number;
  height: number;
}

interface GridViewProps {
  artists: Artist[];
}

export default function GridView({ artists }: GridViewProps) {
  const [imageDimensions, setImageDimensions] = useState<Record<string, ImageDimensions>>({});
  const [isHoveredEnquire, setIsHoveredEnquire] = useState(false);
  const level1Ref = useRef<HTMLDivElement>(null);
  const level2Ref = useRef<HTMLDivElement>(null);
  const level3Ref = useRef<HTMLDivElement>(null);
  const enquireButtonRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);

  const loadImage = useCallback((artist: Artist) => {
    const img = document.createElement('img') as HTMLImageElement;
    img.src = `/images/${artist.images[0]}`;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImageDimensions((prev) => ({
        ...prev,
        [artist.id]: { width: img.width, height: img.height },
      }));
    };
  }, []);

  useEffect(() => {
    artists.forEach(loadImage);
  }, [artists, loadImage]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#parallax-container',
        start: 'top top',
        scrub: true,
      },
    });

    if (level1Ref.current && level2Ref.current && level3Ref.current) {
      tl.to(level1Ref.current, { yPercent: -90, ease: 'none' }, 0);
      tl.to(level2Ref.current, { yPercent: -10, ease: 'none' }, 0);
      tl.to(level3Ref.current, { yPercent: -30, ease: 'none' }, 0);
    }

    const enquireButton = enquireButtonRef.current;
    const container = containerRef.current;
    const lastImage = lastImageRef.current;

    if (enquireButton && container && lastImage) {
      gsap.set(enquireButton, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: container,
        start: 'top top+=100',
        end: () => `bottom-=${lastImage.offsetHeight} top`,
        onEnter: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          });
        },
        onLeave: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          });
        },
        onEnterBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            position: 'fixed',
            top: '10px',
          });
        },
        onLeaveBack: () => {
          gsap.to(enquireButton, { 
            autoAlpha: 0,
            y: 20,
            duration: 0.3
          });
        }
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getImageOrientation = (dimensions: ImageDimensions) => {
    if (dimensions.width > dimensions.height) return 'landscape';
    if (dimensions.height > dimensions.width) return 'portrait';
    return 'square';
  };

  return (
    <div ref={containerRef} className="relative">
      <div id="parallax-container" className="relative flex flex-wrap mx-auto max-w-full">
        {/* Column for level 1 */}
        <div ref={level1Ref} className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
          <div className="flex flex-col gap-4">
            {artists
              .filter((_, index) => index % 3 === 0)
              .map((artist) => {
                const dimensions = imageDimensions[artist.id];
                const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
                return (
                  <div key={artist.id} className="relative group">
                    <Image
                      src={`/images/${artist.images[0]}`}
                      alt={`Artwork by ${artist.name}`}
                      width={dimensions?.width || 400}
                      height={dimensions?.height || 400}
                      className={`w-full h-auto object-cover ${orientation === 'portrait' ? 'max-h-[600px]' : ''}`}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div
                      className="absolute bottom-[5px] left-[5px] right-[5px] bg-black bg-opacity-100 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[3px]"
                      aria-hidden="true"
                    >
                      <div className="w-full flex justify-between items-center px-2 pt-3 pb-3">
                        <span className="font-broone text-sm text-white">{artist.id}</span>
                        <span className="font-marcellus text-sm text-white">{artist.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Column for level 2 */}
        <div ref={level2Ref} className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
          <div className="flex flex-col gap-4">
            {artists
              .filter((_, index) => index % 3 === 1)
              .map((artist) => {
                const dimensions = imageDimensions[artist.id];
                const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
                return (
                  <div key={artist.id} className="relative group">
                    <Image
                      src={`/images/${artist.images[0]}`}
                      alt={`Artwork by ${artist.name}`}
                      width={dimensions?.width || 400}
                      height={dimensions?.height || 400}
                      className={`w-full h-auto object-cover ${orientation === 'portrait' ? 'max-h-[600px]' : ''}`}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div
                      className="absolute bottom-[5px] left-[5px] right-[5px] bg-black bg-opacity-100 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[3px]"
                      aria-hidden="true"
                    >
                      <div className="w-full flex justify-between items-center px-2 pt-3 pb-3">
                        <span className="font-broone text-sm text-white">{artist.id}</span>
                        <span className="font-marcellus text-sm text-white">{artist.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Column for level 3 */}
        <div ref={level3Ref} className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6">
          <div className="flex flex-col gap-4">
            {artists
              .filter((_, index) => index % 3 === 2)
              .map((artist, index, filteredArtists) => {
                const dimensions = imageDimensions[artist.id];
                const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
                const isLastImage = index === filteredArtists.length - 1;
                return (
                  <div 
                    key={artist.id} 
                    className="relative group"
                    ref={isLastImage ? lastImageRef : null}
                  >
                    <Image
                      src={`/images/${artist.images[0]}`}
                      alt={`Artwork by ${artist.name}`}
                      width={dimensions?.width || 400}
                      height={dimensions?.height || 400}
                      className={`w-full h-auto object-cover ${orientation === 'portrait' ? 'max-h-[600px]' : ''}`}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div
                      className="absolute bottom-[5px] left-[5px] right-[5px] bg-black bg-opacity-100 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[3px]"
                      aria-hidden="true"
                    >
                      <div className="w-full flex justify-between items-center px-2 pt-3 pb-3">
                        <span className="font-broone text-sm text-white">{artist.id}</span>
                        <span className="font-marcellus text-sm text-white">{artist.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Link
        ref={enquireButtonRef}
        href="/enquire"
        className="fixed top-[10px] right-[3%] flex items-center justify-center bg-black rounded-full px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out z-50"
        onMouseEnter={() => setIsHoveredEnquire(true)}
        onMouseLeave={() => setIsHoveredEnquire(false)}
      >
        <div
          className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out"
        >
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
              isHoveredEnquire ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          />
        </div>
        <span className="ml-2 whitespace-nowrap text-[1.125rem] font-broone text-white">
          Enquire to purchase
        </span>
      </Link>
    </div>
  );
}