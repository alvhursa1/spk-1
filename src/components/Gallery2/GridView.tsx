'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Artist } from '@/data/artists';
import { gsap } from 'gsap';

interface ImageDimensions {
  width: number;
  height: number;
}

interface GridViewProps {
  artists: Artist[];
}

export default function GridView({ artists }: GridViewProps) {
  const [imageDimensions, setImageDimensions] = useState<Record<string, ImageDimensions>>({});
  const level1Ref = useRef<HTMLDivElement>(null);
  const level2Ref = useRef<HTMLDivElement>(null);
  const level3Ref = useRef<HTMLDivElement>(null);

  const loadImage = useCallback((artist: Artist) => {
    const img = new (window as any).Image() as HTMLImageElement;
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

  // Parallax effect using GSAP
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#parallax-container',
        start: 'top top',
        scrub: true,
      },
    });

    // Parallax movement for each layer
    if (level1Ref.current && level2Ref.current && level3Ref.current) {
      tl.to(level1Ref.current, { yPercent: -90, ease: 'none' }, 0);
      tl.to(level2Ref.current, { yPercent: -10, ease: 'none' }, 0);
      tl.to(level3Ref.current, { yPercent: -30, ease: 'none' }, 0);
    }

    return () => {
      tl.kill();
    };
  }, []);

  const getImageOrientation = (dimensions: ImageDimensions) => {
    if (dimensions.width > dimensions.height) return 'landscape';
    if (dimensions.height > dimensions.width) return 'portrait';
    return 'square';
  };

  return (
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
                    crossOrigin="anonymous"
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
                    crossOrigin="anonymous"
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
                    crossOrigin="anonymous"
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
  );
}
