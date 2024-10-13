'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import LetstalkButton from './LetstalkButton';

const Fter: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    if (isLogoHovered) {
      const timer = setTimeout(() => {
        setIsLogoHovered(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLogoHovered]);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = image.getBoundingClientRect();
        const x = Math.max(0, (event.clientX - rect.left) / rect.width - 0.5);
        const y = Math.max(0, (event.clientY - rect.top) / rect.height - 0.5);

        gsap.to(image, {
          x: -x * 20,
          y: -y * 20,
          duration: 0.5,
          ease: 'power3.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(image, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      image.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        image.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <footer className="min-h-screen flex flex-col items-start pt-[3%] relative">
      <div className="absolute bottom-0 left-0 z-0 w-2/4" ref={imageRef} style={{ paddingTop: '%' }}>
        <Image
          src="/images/FterBnner.png"
          alt="Footer Banner"
          layout="responsive"
          width={1280}
          height={720}
          objectFit="contain"
          className="w-[60%] h-auto object-contain"
        />
      </div>

      <div className="w-full flex justify-between items-start relative z-10">
        <div className="w-1/2" style={{ paddingLeft: '3%' }}>
          <h1 className="font-marcellus text-[1.5rem] leading-none">
            Boring <span className="font-broone">Visuals?</span>
          </h1>
          <p className="font-satoshi-light text-[1rem] pl-[12.5%]">
            Not on our watch.
          </p>

          <div className="flex justify-start pl-[20%] pt-[3%]">
            <LetstalkButton />
          </div>
        </div>

        <div className="w-1/2 relative h-[300px]" style={{ paddingRight: '3%' }}>
          <div className="absolute top-0 left-0">
            <a href="/" className="font-satoshi-light text-[0.9375rem]">
              Home
            </a>
          </div>

          <div className="absolute top-0 right-0" style={{ marginRight: '3%' }}>
            <a href="mailto:team@spektrumagency.us" className="font-satoshi-light text-[0.9375rem]">
              team@spektrumagency.us
            </a>
          </div>

          <div className="absolute bottom-0 right-0" style={{ marginRight: '3%' }}>
            <a href="https://www.instagram.com/spektrum.agency/" className="font-satoshi-light text-[0.9375rem]">
              Instagram
            </a>
          </div>

          <div className="absolute bottom-0 left-0">
            <a href="https://co.linkedin.com/company/spektrumagency" className="font-satoshi-light text-[0.9375rem]">
              LinkedIn
            </a>
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <a href="/artists" className="font-satoshi-light text-[0.9375rem]">
              Artist
            </a>
            <div className="flex flex-col items-start mt-2 space-y-2">
              <a href="/work" className="font-satoshi-light text-[0.9375rem]">
                Work
              </a>
              <a href="/contact" className="font-satoshi-light text-[0.9375rem]">
                Contact
              </a>
              <a href="/about-us" className="font-satoshi-light text-[0.9375rem]">
                About Us
              </a>
              <a href="/artifact" className="font-satoshi-light text-[0.9375rem]">
                Artifact
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <a href="https://www.facebook.com/people/spektrumagency/100072540636849/" className="font-satoshi-light text-[0.9375rem]">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div 
        className="w-full relative mt-6 z-10"
        onMouseEnter={() => setIsLogoHovered(true)}
        style={{
          transform: isLogoHovered ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'transform 0.3s ease-in-out',
          paddingLeft: '60%',
          paddingTop: '1%',
        }}
      >
        <Image
          src="/LgoFterSpektrum.svg"
          alt="Logo Footer Spektrum"
          layout="responsive"
          width={1280}
          height={720}
          objectFit="contain"
          className="block ml-auto"
          style={{ width: 'auto', height: '100%' }}
        />
      </div>

      <div className="w-full px-[1%] pt-[1%] relative z-10">
        <p className="font-broone text-[0.625rem] text-left">
          All content on this website is protected by international copyright laws: images are copyright © the named artists, logos are copyright © the respective companies, other content is copyright © 2021- Spektrum; no content may be reproduced without prior written consent from the copyright holder.
        </p>
        <p className="font-broone text-[0.625rem] text-left">
          Spektrum is the trading name of Spektrum Agency ING., a brand registered in United States of America. Registered office: 123 William Street, New York, NY 10038-3804. Brand id: 10-6295703.
        </p>
      </div>
    </footer>
  );
};

export default Fter;
