'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hder() {
    // Estados para controlar los eventos de interacción
    const [isStoreHovered, setIsStoreHovered] = useState(false) // Controla si el botón "Visit our store" está siendo hovereado
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Controla si el menú principal está abierto
    const [isArtistsHovered, setIsArtistsHovered] = useState(false) // Controla si "Meet our artists" está siendo hovereado
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Controla si el menú móvil está abierto
    const [isVisible, setIsVisible] = useState(true) // Controla si el navbar es visible
    const lastScrollY = useRef(0) // Almacena el último valor de scroll en el eje Y

    // Efecto para ocultar el navbar al hacer scroll hacia abajo y mostrarlo al hacer scroll hacia arriba
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current) {
                // Si el usuario hace scroll hacia abajo, oculta el navbar
                setIsVisible(false)
            } else {
                // Si el usuario hace scroll hacia arriba, muestra el navbar
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY // Actualiza el valor de scroll actual
        }

        window.addEventListener('scroll', controlNavbar)

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    // Efecto para ocultar el texto "Visit our store" después de 2 segundos al hacer hover
    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isStoreHovered) {
            timer = setTimeout(() => {
                setIsStoreHovered(false)
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [isStoreHovered])

    // Maneja el clic en "Store" para abrir el menú móvil en pantallas pequeñas
    const handleStoreClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileMenuOpen(true)
        }
    }

    return (
        <div
            className={`fixed w-full px-7 py-6 flex justify-between items-center text-white font-broone transition-transform duration-300 z-99 bg-transparent ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`} // Navbar transparente que se oculta o muestra con scroll
        >
            {/* Icono de la tienda en la izquierda */}
            <div className="relative flex-1">
                <div
                    className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white bg-transparent cursor-pointer transition-all duration-500 ease-in-out group"
                    onMouseEnter={() => setIsStoreHovered(true)}
                    onMouseLeave={() => setIsStoreHovered(false)}
                    onClick={handleStoreClick}
                >
                    {/* Círculo pequeño dentro del botón "Store" */}
                    <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white bg-transparent transition-all duration-500 ease-in-out ${
                            isStoreHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`} // El círculo pequeño aparece al hacer hover
                    />
                    {/* Texto que aparece en hover: "Visit our store" */}
                    <Link href="/store" className="hidden md:block">
                        <span
                            className={`absolute left-full ml-4 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out ${
                                isStoreHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`} // Texto aparece/desaparece con hover
                        >
                            Visit our store
                        </span>
                    </Link>
                </div>
            </div>

            {/* Botón de Menú centrado */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <button
                    className="text-[1.125rem] font-broone"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambia el estado de apertura del menú
                >
                    Menu
                </button>
            </div>

            {/* Enlace "Meet our artists" a la derecha */}
            <Link href="/talk" passHref>
                <div
                    className="flex items-center cursor-pointer pr-[2%] flex-1 justify-end whitespace-nowrap"
                    onMouseEnter={() => setIsArtistsHovered(true)}
                    onMouseLeave={() => setIsArtistsHovered(false)}
                >
                    <span className="text-[1.125rem] mr-2">Let&apos;s talk</span>
                    {/* Flecha animada al lado del texto "Meet our artists" */}
                    <div className="relative w-[23px] h-[7px]">
                        <Image
                            src="/vectormeetourartists.svg"
                            alt="Meet our artists"
                            width={23}
                            height={7}
                            className={`transition-transform duration-500 ease-in-out ${
                                isArtistsHovered ? 'translate-x-full' : ''
                            }`} // Flecha se mueve hacia la derecha al hacer hover
                        />
                    </div>
                </div>
            </Link>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center z-50">
                    {/* Botón para cerrar el menú */}
                    <button
                        className="absolute top-6 right-7 text-[1.125rem] font-broone text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Menú móvil para pantallas pequeñas */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-64 h-screen bg-white text-black flex flex-col items-start justify-start p-6 z-99">
                    {/* Botón para cerrar el menú móvil */}
                    <button
                        className="self-end text-2xl mb-6 text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        &times;
                    </button>
                    {/* Enlace a la tienda en el menú móvil */}
                    <Link href="/store" className="text-xl mb-4 font-broone text-black">
                        Store
                    </Link>
                </div>
            )}
        </div>
    )
}
