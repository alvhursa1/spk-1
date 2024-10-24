'use client';

import localFont from 'next/font/local';
import { useState, useRef } from 'react';
import AboutButton from '../Buttons/AboutButton';
import Scroll from './ScrollText';
import BnnerImageSmoot2 from '../Home/BnnerImageSmoot2';

const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' });
const satoshiBold = localFont({ src: './../../app/fonts/Satoshi-Bold2.otf' });

const TextHme2: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const bannerRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    }
  };

  const paragraph1 = [
    { text: 'We are an Illustration', bold: 'Illustration' },
    { text: 'and design agency', bold: 'and design agency' },
    { text: 'focused on helping and', bold: '' },
    { text: 'supporting companies,', bold: '' },
    { text: 'editorial houses and', bold: '' },
    { text: 'executive groups in their', bold: '' },
    { text: 'creative endeavors.', bold: '' },
  ];

  const paragraph2 = [
    { text: 'With a team of over 70 talented artists with unique', bold: '70 talented artists' },
    { text: 'styles and design lines we aim to provide a wide', bold: '' },
    { text: 'range of services, from banners, illustrations,', bold: 'banners, illustrations,' },
    { text: 'album covers to even fashion and clothing', bold: 'album covers to even fashion and clothing' },
    { text: 'designs.', bold: 'designs.' },
  ];

  const paragraph3 = [
    {
      text: (
        <>
          <span className="font-marcellus">Boost your </span>
          <span className="font-broone">visual impact, </span>
          <span className="font-marcellus">and</span>
        </>
      ),
      paddingLeft: '10%',
    },
    {
      text: (
        <>
          <span className="font-marcellus">access a one-of-a-kind bank</span>
        </>
      ),
      paddingLeft: '37%',
    },
    {
      text: (
        <>
          <span className="font-marcellus">of talented </span>
          <span className="font-broone">worldwide artists.</span>
        </>
      ),
      paddingLeft: '17%',
    },
  ];

  const renderText = (textArray: { text: string; bold?: string; className?: string }[]) => {
    return textArray.map((line, index) => (
      <p key={index} className={`text-left ${line.className || ''} ${satoshiLight.className}`} style={{ fontSize: '1rem', lineHeight: '1.25', color: 'white' }}>
        {line.text}
        {line.bold && <span className={`${satoshiBold.className}`}> {line.bold}</span>}
      </p>
    ));
  };

  return (
    <div className="w-full h-auto space-y-8 -mt-80 leading-tight" onMouseMove={handleMouseMove} ref={bannerRef}>
      <div className="flex">
        <div className="w-1/2">
          <Scroll />
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="flex">
        <div className="w-[60%] pl-[20%] -mt-36">{renderText(paragraph1)}</div>
        <div className="w-[15%]"></div>
        <div className="w-[10%]"></div>
        <div className="w-[15%]"></div>
      </div>

      <div className="flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 text-right pt-5">
          <div className="text-left">{renderText(paragraph2)}</div>
        </div>
      </div>

      <div className="flex ">
        <div className="w-1/2 pt-10">
          {paragraph3.map((line, index) => (
            <p key={index} className="leading-none" style={{ fontSize: 'calc(22.29577px + .18779vw)', color: 'white', paddingLeft: line.paddingLeft }}>
              {line.text}
            </p>
            
          ))}
          <div className='flex justify-center items-center mt-10'>
          <AboutButton />
          </div>

        </div>
        <div className="w-1/2">

        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-1/2 flex justify-center items-center pt-6">

        </div>
        <div className="relative w-full h-[100vh] inset-0 z-0 -mt-60" onMouseMove={handleMouseMove} ref={bannerRef}>
          <BnnerImageSmoot2 mousePosition={mousePosition} />
        </div>
      </div>
    </div>
  );
};

export default TextHme2;