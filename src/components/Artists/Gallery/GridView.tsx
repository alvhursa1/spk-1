'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Artist } from '@/data/artists';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageDimensions {
  width: number;
  height: number;
}

interface GridViewProps {
  artists: Artist[];
}

export default function GridView({ artists }: GridViewProps) {
  const [imageDimensions, setImageDimensions] = useState<Record<string, ImageDimensions>>({});
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const galleryRef = useRef<HTMLDivElement>(null);

  // Set up Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      lenis.destroy();
    };
  }, []);

  const loadImage = useCallback((artist: Artist) => {
    if (typeof window !== 'undefined') {
      const img = new window.Image();
      img.src = `/images/${artist.images[0]}`;
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        setImageDimensions((prev) => ({
          ...prev,
          [artist.id]: { width: img.width, height: img.height },
        }));
      };
    }
  }, []);

  useEffect(() => {
    artists.forEach(loadImage);
  }, [artists, loadImage]);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  // Create scroll-based transforms for each column
  const { height } = dimension;
  const yTransform1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const yTransform2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const yTransform3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);

  const getImageOrientation = (dimensions: ImageDimensions) => {
    if (dimensions.width > dimensions.height) return 'landscape';
    if (dimensions.height > dimensions.width) return 'portrait';
    return 'square';
  };

  return (
    <div className="relative">
      <div ref={galleryRef} className="flex gap-4 p-8">
        {/* Column for level 1 */}
        <motion.div style={{ y: yTransform1 }} className="w-1/3 flex flex-col gap-8">
          {artists
            .filter((_, index) => index % 3 === 0)
            .map((artist) => {
              const dimensions = imageDimensions[artist.id];
              const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
              return (
                <div key={artist.id} className="relative group rounded-lg overflow-hidden">
                  <Image
                    src={`/images/${artist.images[0]}`}
                    alt={`Artwork by ${artist.name}`}
                    width={dimensions?.width || 400}
                    height={dimensions?.height || 400}
                    className={`w-full h-auto object-cover ${
                      orientation === 'portrait' ? 'max-h-[600px]' : ''
                    }`}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 pb-[5px] pl-[5px] pr-[5px]">
                    <div className="bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-[5px] py-[5px] rounded">
                      <span className="text-white text-[1rem] font-light">{artist.id}</span>
                      <span className="text-white text-[1rem] font-light">{artist.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </motion.div>

        {/* Column for level 2 */}
        <motion.div style={{ y: yTransform2 }} className="w-1/3 flex flex-col gap-8">
          {artists
            .filter((_, index) => index % 3 === 1)
            .map((artist) => {
              const dimensions = imageDimensions[artist.id];
              const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
              return (
                <div key={artist.id} className="relative group rounded-lg overflow-hidden">
                  <Image
                    src={`/images/${artist.images[0]}`}
                    alt={`Artwork by ${artist.name}`}
                    width={dimensions?.width || 400}
                    height={dimensions?.height || 400}
                    className={`w-full h-auto object-cover ${
                      orientation === 'portrait' ? 'max-h-[600px]' : ''
                    }`}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 pb-[5px] pl-[5px] pr-[5px]">
                    <div className="bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-[5px] py-[5px] rounded">
                      <span className="text-white text-[1rem] font-light">{artist.id}</span>
                      <span className="text-white text-[1rem] font-light">{artist.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </motion.div>

        {/* Column for level 3 */}
        <motion.div style={{ y: yTransform3 }} className="w-1/3 flex flex-col gap-8">
          {artists
            .filter((_, index) => index % 3 === 2)
            .map((artist) => {
              const dimensions = imageDimensions[artist.id];
              const orientation = dimensions ? getImageOrientation(dimensions) : 'landscape';
              return (
                <div key={artist.id} className="relative group rounded-lg overflow-hidden">
                  <Image
                    src={`/images/${artist.images[0]}`}
                    alt={`Artwork by ${artist.name}`}
                    width={dimensions?.width || 400}
                    height={dimensions?.height || 400}
                    className={`w-full h-auto object-cover ${
                      orientation === 'portrait' ? 'max-h-[600px]' : ''
                    }`}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 pb-[5px] pl-[5px] pr-[5px]">
                    <div className="bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center px-[5px] py-[5px] rounded">
                      <span className="text-white text-[1rem] font-light">{artist.id}</span>
                      <span className="text-white text-[1rem] font-light">{artist.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </motion.div>
      </div>

      {/* EnquireButton component */}

      <div className="h-screen"></div> {/* Spacer */}
      <div className="h-screen"></div> {/* Spacer */}
    </div>
  );
}