import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BnnerImageSmootProps {
  mousePosition: { x: number; y: number };
}

export default function BnnerImageSmoot2({ mousePosition }: BnnerImageSmootProps) {
  const [transformStyle, setTransformStyle] = useState({ transform: 'translate(0px, 0px)' });

  useEffect(() => {
    // Calculamos el movimiento para la imagen basándonos en la posición del ratón
    const translateX = (mousePosition.x - 0.5) * 40; // Rango de movimiento más perceptible en X
    const translateY = (mousePosition.y - 0.5) * 40; // Rango de movimiento más perceptible en Y

    // Actualizamos el estado de estilo para mover la imagen
    setTransformStyle({
      transform: `translate(${translateX}px, ${translateY}px)`,
    });
  }, [mousePosition]);

  return (
    <div className="relative w-[90vw] h-[100vh] overflow-hidden">
      <Image
        src="/images/figures/banner-2-home-specktrum.webp"
        alt="Banner de Spektrum"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL="/images/figures/banner-2-home-specktrum-blur.webp"
        style={{
          objectFit: 'contain',
          objectPosition: '80% center', // Centramos la imagen
          transition: 'transform 0.4s ease-out', // Suavizamos la transición
          ...transformStyle, // Aplicamos la transformación de estilo aquí
        }}
      />
    </div>
  );
}
