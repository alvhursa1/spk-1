'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

// Fuentes personalizadas cargadas localmente
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' })
const marcellusFont = localFont({ src: './../../app/fonts/Marcellus-Regular.ttf' })
const brooneFont = localFont({ src: './../../app/fonts/Broone.otf' })

export default function BannerText() {
  const [logoHeight, setLogoHeight] = useState(0)
  const [isStretched, setIsStretched] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const logoRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      const height = logoRef.current.clientHeight
      setLogoHeight(height)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStretched(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      })
    }
  }

  return (
    <div 
      className="relative w-full h-[100vh]" 
      onMouseMove={handleMouseMove}
      ref={bannerRef}
    >
      {/* Imagen de fondo con z-index 0 y efecto de movimiento suave */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          height: '100vh', 
          width: '90vw', 
          overflow: 'hidden',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <Image
          src="/bannerspektrumhome.png"
          alt="Banner de Spektrum"
          layout="fill"
          quality={100}
          objectFit="contain"
          objectPosition="center center"
        />
      </div>

      {/* El resto del contenido permanece igual */}
      <div className="relative z-10 w-full h-full leading-tight">
        {/* Párrafo 1 */}
        <div className={`${marcellusFont.className} text-left pt-[10%] leading-tight`}>
          <p
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.2',
              color: 'white',
              paddingLeft: '17.5%',
            }}
          >
            Specialized in art licensing
          </p>
          <p
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.2',
              color: 'white',
              paddingLeft: '15%',
            }}
          >
            and book illustration.
          </p>
        </div>

        {/* Párrafo 2 */}
        <div className={`absolute top-[30%] right-[3%] leading-tight ${satoshiLight.className}`}>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.1',
              color: 'white',
              textAlign: 'left',
            }}
          >
            Effortless art <br />
            creation <br />
            with adaptable <br />
            payments <br />
            and no legal <br />
            headaches
          </p>
        </div>

        {/* Párrafo 3 */}
        <Link
          href="/talk"
          className={`absolute top-[50%] left-[3%] flex items-center ${brooneFont.className} pointer-events-auto`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p
            style={{
              fontSize: '1.125rem',
              color: 'white',
              marginRight: '10px',
            }}
          >
            Request a discovery session
          </p>

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
        </Link>

        {/* Párrafo 4 */}
        <div
          className={`absolute left-[3%] ${marcellusFont.className} transition-all duration-700 ease-out`}
          style={{
            fontSize: '1rem',
            color: 'white',
            bottom: `${logoHeight + 5}px`, // El margen inferior depende de la altura del logo
            wordSpacing: isStretched ? '50px' : 'normal', // Estirar espacios entre palabras un 50px
            transition: 'word-spacing 0.7s ease-out, transform 0.7s ease-out', // Animación suave de estiramiento y desplazamiento
          }}
        >
          So, be part of the
        </div>

        {/* Logo Spektrum en la parte inferior */}
        <div ref={logoRef} className="absolute bottom-0 left-0 w-full flex justify-center">
          <Image
            src="/logo-spektrum.svg"
            alt="Logo de Spektrum"
            width={200}
            height={50}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
