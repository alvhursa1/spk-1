'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HderEnquire() {
    const [isStoreHovered, setIsStoreHovered] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCloseHovered, setIsCloseHovered] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isStoreHovered) {
            timer = setTimeout(() => {
                setIsStoreHovered(false)
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [isStoreHovered])

    const handleStoreClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileMenuOpen(true)
        }
    }

    return (
        <div
            className={`fixed w-full px-7 py-6 flex justify-between items-center text-white font-broone transition-transform duration-300 z-99 bg-transparent ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
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
                        }`}
                    />
                    {/* Texto que aparece en hover: "Visit our store" */}
                    <Link href="/store" className="hidden md:block">
                        <span
                            className={`absolute left-full ml-4 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out ${
                                isStoreHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}
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
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    Menu
                </button>
            </div>

            {/* Botón "Close" a la derecha */}
            <Link href="/artists" passHref>
                <div
                    className="flex flex-col items-center relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                >
                    {/* Línea diagonal que aparece al hacer hover */}
                    <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1.75rem] h-0 border-b-2 border-white rotate-45 transition-all duration-500 ease-in-out ${
                            isCloseHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                    />
                    {/* Texto "Close" debajo del botón */}
                    <span className="mt-9 text-white text-[1.125rem] font-broone">Close</span>
                </div>
            </Link>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <Link href="/artists" passHref>
                        <button
                            className="absolute top-24 right-7 text-[1.125rem] font-broone text-white"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Close
                        </button>
                    </Link>
                </div>
            )}

            {/* Menú móvil para pantallas pequeñas */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 left-0 w-64 h-screen bg-white text-black flex flex-col items-start justify-start p-6 z-99">
                    <button
                        className="self-end text-2xl mb-6 text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        &times;
                    </button>
                    <Link href="/store" className="text-xl mb-4 font-broone text-black">
                        Store
                    </Link>
                </div>
            )}
        </div>
    )
}