'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Componente de hover sobre la imagen
const ImageHover: React.FC = () => {
  // Lista de imágenes para mostrar  aleatoriamente durante el hover
  const galleryImages = useMemo(() => [
    '/images/gallery/emilio1.png',
    '/images/gallery/emilio2.png',
    '/images/gallery/emilio3.png',
    '/images/gallery/emilio4.png',
    '/images/gallery/emilio5.png',
    '/images/gallery/emilio6.png',
    '/images/gallery/emilio7.png',
  ], []);

  // Imagen principal
  const mainImage = '/images/figures/banner-artists.webp';

  // Estado para mantener la imagen que se muestra durante el hover
  const [hoverImage, setHoverImage] = useState<string | null>(null);
  
  // Para controlar en qué celda de la cuadrícula (7x7) está el cursor actualmente
  const [lastCell, setLastCell] = useState<number | null>(null);

  // Función para manejar el movimiento del mouse y cambiar la imagen de acuerdo con la posición del cursor
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget as HTMLElement;

    // Obtener las dimensiones de la imagen
    const { width, height, left, top } = target.getBoundingClientRect();

    // Calcular las coordenadas relativas del mouse dentro de la imagen
    const xPos = event.clientX - left;
    const yPos = event.clientY - top;

    // Dividir la imagen en una cuadrícula de 7x7 para cambiar la imagen solo cuando el cursor pasa a otra celda
    const cellWidth = width / 7;
    const cellHeight = height / 7;
    const currentCell = Math.floor(xPos / cellWidth) + Math.floor(yPos / cellHeight) * 7;

    // Cambiar la imagen solo si el cursor está en una celda diferente
    if (currentCell !== lastCell) {
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      setHoverImage(galleryImages[randomIndex]);
      setLastCell(currentCell); // Actualizar la última celda visitada
    }
  }, [lastCell, galleryImages]);

  // Función para manejar cuando el mouse sale de la imagen
  const handleMouseLeave = () => {
    setHoverImage(null); // Resetear la imagen cuando el cursor salga del área
    setLastCell(null); // Resetear la última celda visitada
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="relative w-[35rem] h-[35rem]" // Tamaño de la imagen principal 35rem x 35rem
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Imagen principal redonda */}
        <Image
          src={mainImage}
          alt="Main"
          layout="fill"
          className="w-full h-full rounded-full object-cover"
        />

        {/* Imagen que aparece aleatoriamente cuando el cursor se mueve */}
        {hoverImage && (
          <motion.img
            src={hoverImage}
            alt="Hover Random"
            // Cambiar el tamaño de la imagen hover aquí (ahora es 15rem x 15rem)
            className="absolute top-1/2 left-1/2 w-[15rem] h-[15rem] rounded-full transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageHover;