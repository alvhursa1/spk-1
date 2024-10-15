'use client'

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import Image from 'next/image';
import AboutButton from '../Buttons/AboutButton'; // Importar el componente AboutButton

const TextAnimation: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const partnerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const lines = [
    { 
      text: 'MEET YOUR', 
      className: 'font-marcellus pl-[30%] leading-none', 
      style: {
        fontSize: 'calc(22.95775px + 1.87793vw)',
        lineHeight: '1.2',
        color: 'white',
      } 
    },
    { 
      text: 'CREATIVE', 
      className: 'font-marcellus pl-[20%] leading-none', 
      style: {
        fontSize: 'calc(24.95775px + 1.87793vw)',
        lineHeight: '1.2',
        color: 'white',
      } 
    },
    { 
      text: 'PARTNER', 
      className: 'font-broone pl-[35%] leading-none relative z-10', 
      ref: partnerRef,
      style: {
        fontSize: 'calc(24.95775px + 1.87793vw)',
        lineHeight: '1.2',
        color: 'white',
      } 
    },
  ];

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
    { text: 'Boost your ', className: 'font-marcellus text-[2.1875rem] pl-[3%] leading-none' },
    { text: 'visual impact, ', className: 'font-broone text-[2.1875rem] leading-none' },
    { text: 'and', className: 'font-marcellus text-[2.1875rem] leading-none' },
    { text: 'access a one-of-a-kind bank', className: 'font-marcellus text-[2.1875rem] pl-[24%] leading-none' },
    { text: 'of talented ', className: 'font-marcellus text-[2.1875rem] pl-[9%] leading-none' },
    { text: 'worldwide artists.', className: 'font-broone text-[2.1875rem] leading-none' },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (inView) {
      const totalLines = lines.length + paragraph1.length + paragraph2.length + paragraph3.length;
      const showNextLine = (index: number) => {
        if (index < totalLines) {
          setVisibleLines((prev) => [...prev, index]);
          timeout = setTimeout(() => showNextLine(index + 1), 400);
        }
      };
      showNextLine(0);
    }
    return () => clearTimeout(timeout);
  }, [inView, lines.length, paragraph1.length, paragraph2.length, paragraph3.length]);

  const renderText = (textArray: { text: string; bold?: string; className?: string }[], startIndex: number) => {
    return textArray.map((line, index) => {
      const globalIndex = startIndex + index;
      const parts = line.bold ? line.text.split(line.bold) : [line.text];
      return (
        <div
          key={index}
          ref={line.text === 'PARTNER' ? partnerRef : null} // Referencia a PARTNER
          className={`block ${line.className} ${
            visibleLines.includes(globalIndex) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          } transition-all duration-1000 ease-out`}
        >
          {parts[0]}
          {line.bold && <span className="font-bold">{line.bold}</span>}
          {parts[1]}
        </div>
      );
    });
  };

  // GSAP para mover la imagen con el mouse
  useEffect(() => {
    const image = document.getElementById('animated-image');

    if (image) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = image.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 1.6;
        const y = (event.clientY - rect.top) / rect.height - 1.6;

        gsap.to(image, {
          x: Math.max(0, x * 20), // Solo permitimos movimiento hacia la derecha
          y: y * 20, // Permitimos movimiento hacia arriba y abajo
          duration: 0.5,
          ease: 'power3.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(image, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' }); // Vuelve a la posición original
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
    <div ref={ref} className="relative mt-[-8rem]">
      {/* Imagen colocada detrás del contenido */}
      <div className="absolute right-0 z-0" style={{ width: '100%', height: 'auto', marginTop: '23%' }}>
        <Image
          ref={imageRef}
          id="animated-image"
          src="/BannerSPK2.png"
          alt="Banner Spektrum"
          layout="responsive"
          width={1280}
          height={720}
          objectFit="contain"
        />
      </div>
      <div className="relative z-10">
        {/* Animación del título principal */}
        <div>
          {lines.map((line, index) => (
            <div
              key={index}
              className={`${line.className} ${
                visibleLines.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              } transition-all duration-1000 ease-out`}
              style={line.style} // Aplicar el estilo en línea
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Primer párrafo */}
        <div className="mt-16 font-satoshi-light text-[1.75rem] pl-[25%] leading-snug">
          {renderText(paragraph1, lines.length)}
        </div>

        {/* Segundo párrafo */}
        <div className="mt-8 font-satoshi-light text-[1.75rem] pl-[48%] leading-snug">
          {renderText(paragraph2, lines.length + paragraph1.length)}
        </div>

        {/* Tercer párrafo */}
        <div className="mt-8 leading-snug">
          <div
            className={`block ${
              visibleLines.includes(lines.length + paragraph1.length + paragraph2.length)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            } transition-all duration-1000 ease-out`}
          >
            <span className="font-marcellus text-[2.1875rem] pl-[3%]">Boost your </span>
            <span className="font-broone text-[2.1875rem]">visual impact, </span>
            <span className="font-marcellus text-[2.1875rem]">and</span>
          </div>
          <div
            className={`block ${
              visibleLines.includes(lines.length + paragraph1.length + paragraph2.length + 1)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            } transition-all duration-1000 ease-out font-marcellus text-[2.1875rem] pl-[24%]`}
          >
            access a one-of-a-kind bank
          </div>
          <div
            className={`block ${
              visibleLines.includes(lines.length + paragraph1.length + paragraph2.length + 2)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            } transition-all duration-1000 ease-out`}
          >
            <span className="font-marcellus text-[2.1875rem] pl-[9%]">of talented </span>
            <span className="font-broone text-[2.1875rem]">worldwide artists.</span>
          </div>
        </div>

        {/* Componente AboutButton debajo del párrafo 3 */}
        <div className="mt-20 flex justify-center">
          <div className="w-[48%]">
            {/* Ajustar el ancho para que coincida con el párrafo 3 */}
            <AboutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
