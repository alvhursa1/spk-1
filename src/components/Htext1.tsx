'use client'

import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

const Htext1: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Cambiado a true para que la animación se dispare solo una vez
    threshold: 0.1,
  })

  const lineRefs = useRef<HTMLDivElement[]>([]) // Para referenciar las líneas

  // Definir las líneas principales de texto
  const lines = [
    { text: 'Representing top', className: 'font-marcellus text-[3rem] pl-[2.5%]' },
    { text: 'illustrators', className: 'font-broone text-[3.75rem] pl-[15%]' },
    { text: 'who produce captivating', className: 'font-marcellus text-[3rem] pl-[10%]' },
    { text: "children's, decorative", className: 'font-broone text-[3.75rem] pl-[10%]' },
    { text: '& advertising works', className: 'font-broone text-[3.75rem] pl-[25%]' },
    { text: 'on comission or license', className: 'font-marcellus text-[3rem] pl-[26%]' },
  ]

  // Definir el segundo párrafo
  const paragraph2Lines = [
    { text: 'We are driven by', className: 'font-satoshi-light text-[1.5rem]' },
    { text: 'creativity, authenticity', className: 'font-satoshi-light text-[1.5rem] font-bold' },
    { text: 'and a deep commitment', className: 'font-satoshi-light text-[1.5rem]' },
    { text: 'to our artists and clients.', className: 'font-satoshi-light text-[1.5rem]' },
  ]

  useEffect(() => {
    if (inView) {
      const allLines = lineRefs.current // Referenciamos todas las líneas

      allLines.forEach((line, index) => {
        if (line) {
          gsap.fromTo(
            line,
            { opacity: 0, y: 20 }, // Empieza con opacidad 0 y desplazado 20px hacia abajo
            {
              opacity: 1,
              y: 0, // Llega a su posición original
              duration: 1,
              ease: 'power1.out',
              delay: index * 0.4, // Desfase de tiempo entre líneas
            }
          )
        }
      })
    }
  }, [inView])

  return (
    <div ref={ref} className="relative mt-[-15rem]"> {/* Margen superior negativo de -15rem */}
      {/* Primera sección de líneas */}
      <div>
        {lines.map((line, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) lineRefs.current[index] = el
            }} // Guardamos la referencia de cada línea
            className={line.className}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Segunda sección de párrafo */}
      <div className="mt-4 pl-[74%] pr-[3%] text-left">
        {paragraph2Lines.map((line, index) => {
          const globalIndex = index + lines.length
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) lineRefs.current[globalIndex] = el
              }} // Guardamos la referencia de cada línea del segundo párrafo
              className={line.className}
            >
              {line.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Htext1