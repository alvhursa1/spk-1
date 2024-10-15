'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import localFont from 'next/font/local'

// Cargar la fuente local Satoshi-Light
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' })

export default function BannerWithText() {
  // Estados para controlar las interacciones y las animaciones
  const [isHovered, setIsHovered] = useState(false) // Controla si el texto "Request a discovery session" está hovereado
  const [isVisible, setIsVisible] = useState(false) // Controla si el texto final es visible
  const [isLogoHovered, setIsLogoHovered] = useState(false) // Controla si el logo está hovereado
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 }) // Controla la posición de la imagen al mover el ratón
  const bannerRef = useRef<HTMLDivElement>(null) // Referencia al contenedor de la imagen del banner
  const textRef = useRef<HTMLDivElement>(null) // Referencia al texto final para la animación de visibilidad

  // Efecto para observar cuando el texto final entra en la vista del usuario
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true) // Activa la animación cuando el texto entra en vista
        }
      },
      { threshold: 0.1 } // La animación se activa cuando el 10% del elemento es visible
    )

    const currentTextRef = textRef.current
    if (currentTextRef) {
      observer.observe(currentTextRef)
    }

    // Limpiar el observador cuando el componente se desmonte
    return () => {
      if (currentTextRef) {
        observer.unobserve(currentTextRef)
      }
    }
  }, [])

  // Maneja el movimiento del ratón sobre la imagen para aplicar el efecto de desplazamiento
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      // Limitar el movimiento a un máximo de 20px en cada dirección
      const moveX = (x - 0.5) * 40
      const moveY = (y - 0.5) * 40
      setImagePosition({ x: moveX, y: moveY })
    }
  }

  // Restablecer la posición de la imagen cuando el ratón deja el banner
  const handleMouseLeave = () => {
    setImagePosition({ x: 0, y: 0 }) // Resetea la imagen a su posición original
  }

  return (
    <div className="relative w-full">
      {/* Contenedor de la imagen de banner */}
      <div
        ref={bannerRef}
        className="relative w-full overflow-hidden"
        style={{ paddingTop: '100%' }} // Mantiene una relación de aspecto cuadrada
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Imagen del banner */}
        <Image
          id="banner-image" // ID único para esta imagen
          src="/bannerspektrumhome.png" // Ruta de la imagen del banner
          alt="Banner de Spektrum"
          fill
          quality={100} // Asegura una alta calidad de la imagen
          style={{
            objectPosition: 'center top', // Alinea la imagen en el centro superior
            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`, // Aplica la transformación según el ratón
            transition: 'transform 0.3s ease-out' // Transición suave en el desplazamiento de la imagen
          }}
          priority
        />
      </div>

      {/* Contenedor del texto sobre la imagen */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pt-[17.7rem] pl-[12rem]">
          <h1 className="font-marcellus text-[75px] text-white leading-tight">
            {/* Texto sin borde negro */}
            Specialized in art licensing<br />
            and book illustration.
          </h1>
        </div>

        {/* Texto de la derecha con fuente Satoshi-Light */}
        <div className={`absolute top-[16.8rem] right-[3%] ${satoshiLight.className}`}>
          <p className="text-[16px] text-white leading-tight text-left">
            Effortless art<br />
            creation<br />
            with adaptable<br />
            payments<br />
            and no legal<br />
            headaches<br />
          </p>
        </div>

        {/* Enlace para "Request a discovery session" con hover */}
        <div
          className="absolute top-[38rem] left-[3%] flex items-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="font-broone text-[24px] text-white mr-2">
            Request a discovery session
          </span>
          {/* Flecha animada en el hover */}
          <div className="relative w-[23px] h-[7px]">
            <Image
              src="/vectormeetourartists.svg"
              alt="Vector icon"
              width={23}
              height={7}
              className={`transition-transform duration-500 ease-in-out ${
                isHovered ? 'translate-x-full' : ''
              }`}
            />
          </div>
        </div>

        {/* Texto animado "So, be part of the" */}
        <div
          ref={textRef}
          className="absolute top-[44rem] left-[3%] font-marcellus text-[2rem] text-white text-left"
          style={{
            transition: 'word-spacing 1s ease-out',
            wordSpacing: isVisible ? '3em' : 'normal', // Aplica el espaciado de palabras si es visible
          }}
        >
          So, be part of the
        </div>

        {/* Logo de Spektrum con animación de desplazamiento en hover */}
        <div
          className="absolute top-[49rem] left-0 w-full px-[0%] transition-all duration-300 ease-in-out pointer-events-auto"
          style={{
            transform: isLogoHovered ? 'translateY(10px)' : 'translateY(0)',
            transition: isLogoHovered ? 'transform 0.3s ease-in-out' : 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          {/* Logo de Spektrum */}
          <Image
            id="logo-image" // ID único para el logo
            src="/logo-spektrum.svg"
            alt="Logo de Spektrum"
            width={100}
            height={20}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
