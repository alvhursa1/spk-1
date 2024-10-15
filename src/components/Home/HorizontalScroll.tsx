'use client'

/* Ajuste de scroll suave y eliminación de los nombres de los autores */

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';  // hook para usar gsap en el lado cliente
import Image from 'next/image'; // Importa el componente Image de next/image

gsap.registerPlugin(ScrollTrigger);

// Define la lista de imágenes
const images = [
  { src: '/images/juana1.png', orientation: 'horizontal' }, // Panel 1
  { src: '/images/ana1.png', orientation: 'horizontal' }, // Panel 1
  { src: '/images/jorge1.png', orientation: 'vertical' }, // Panel 1
  { src: '/images/tomas1.png', orientation: 'horizontal' }, // Panel 2
  { src: '/images/gabriel1.png', orientation: 'vertical' }, // Panel 3
  { src: '/images/sebastian1.png', orientation: 'horizontal' }, // Panel 3
  { src: '/images/Jeronimo.png', orientation: 'horizontal' }, // Panel 4
  { src: '/images/laura1.png', orientation: 'vertical' }, // Panel 4
  { src: '/images/santiago1.png', orientation: 'horizontal' }, // Panel 5
  { src: '/images/sofia1.png', orientation: 'vertical' }, // Panel 5
  { src: '/images/juan1.png', orientation: 'horizontal' }, // Panel 6
  { src: '/images/alejandro1.png', orientation: 'horizontal' }, // Panel 6
  { src: '/images/emilio1.png', orientation: 'vertical' } // Panel 7
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const panels = panelsRef.current;
    const container = containerRef.current;

    if (!container || panels.length === 0) return;

    // Scroll suave entre paneles usando GSAP
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'power1.inOut', // Suavizado del scroll
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2, // Suavizado del desplazamiento
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div className="flex">
        {/* Panel 1 */}
        <section
          ref={(el: HTMLDivElement | null) => {
            if (el) panelsRef.current[0] = el;
          }}
          className="w-screen h-screen flex-shrink-0 flex flex-col justify-around relative"
        >
          {/* Contenedor 1: Imagen de Juana Vargas (ajustado al alto de la pantalla) */}
          <div className="flex w-full h-1/2 items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/juana1.png"
                alt="Juana Vargas artwork"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Contenedor 2: Dos columnas con Ana María Alarcón y Jorge Callejas */}
          <div className="flex w-full h-1/2 justify-between">
            {/* Columna 1: Imagen de Ana María Alarcón */}
            <div className="relative w-1/2 h-full flex items-center justify-center">
              <Image
                src="/images/ana1.png"
                alt="Ana María Alarcón artwork"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Columna 2: Imagen de Jorge Callejas */}
            <div className="relative w-1/2 h-full flex items-center justify-center">
              <Image
                src="/images/jorge1.png"
                alt="Jorge Callejas artwork"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Resto de los paneles */}
        {Array(Math.ceil((images.length - 3) / 3)).fill(null).map((_, panelIndex) => (
          <section
            key={panelIndex + 1}
            ref={(el: HTMLDivElement | null) => {
              if (el) panelsRef.current[panelIndex + 1] = el;
            }}
            className="w-screen h-screen flex-shrink-0 flex items-center justify-around relative"
          >
            <div className="flex w-full justify-around items-center h-full">
              {/* Panel con tres imágenes */}
              {images.slice((panelIndex + 1) * 3, (panelIndex + 1) * 3 + 3).map((image, index) => (
                <div
                  key={index}
                  className="relative p-1 h-full flex items-center justify-center w-1/3"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt="artwork"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}