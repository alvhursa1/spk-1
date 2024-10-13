'use client';

import React, { useEffect, useRef } from 'react';
import EnquireButton from '../EnquireButtton';
import { gsap } from 'gsap';
import Image from 'next/image';

const BnrArtists: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // GSAP para mover la imagen con el mouse
    const image = document.getElementById('animated-image-artists');

    if (image) {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = image.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

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

  // Animación del texto
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline.fromTo(
      ".line-artists",
      { x: '-100%', color: '#fff' },
      { x: '0%', duration: 2, color: '#fff' }
    );

    gsap.fromTo(
      ".paragraph2-line",
      { x: '-100%', color: '#fff' },
      {
        x: '0%',
        duration: 2,
        color: '#fff', // Mantiene el color blanco al final de la animación
        ease: 'power2.out',
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <section className="relative z-10 pt-[15%]">
      <div className="flex justify-between">
        {/* Columna izquierda: Texto */}
        <div className="w-1/2 z-10 text-left">
          {/* Texto del título */}
          <h1 className="font-marcellus text-[1.875rem] pl-[2%] leading-none">
            Meet our
          </h1>
          <h1 className="line-artists font-broone text-[calc(24.95775px + 1.87793vw)] pl-[24%] leading-none text-white">
            Artists
          </h1>

          {/* Párrafo 2 con líneas y animación */}
          <div className="pt-[5%] pl-[28%]">
            {/* Primera línea del párrafo 2 */}
            <div className="paragraph2-line">
              <span className="font-broone text-[1.75rem]">
                Our diverse{' '}
              </span>
              <span className="font-satoshi-light text-[1.75rem]">
                roster
              </span>
            </div>

            {/* Resto del párrafo 2 */}
            <p className="paragraph2-line font-satoshi-light text-[1.75rem]">
              covers the entire
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1.75rem]">
              spektrum of creativity,
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1.75rem]">
              allowing us to cater
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1.75rem]">
              to a wide range of
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1.75rem]">
              client needs
            </p>
          </div>

          {/* Botón Enquire */}
          <div className="pt-[0%]">
            <EnquireButton />
          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="w-1/2">
          <Image
            ref={imageRef}
            id="animated-image-artists"
            src="/Bner_Artists.png"
            alt="Banner of Artists"
            layout="responsive"
            width={700}
            height={500}
            className="z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default BnrArtists;