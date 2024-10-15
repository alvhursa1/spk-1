'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function StoreButton() {
    const [isHovered, setIsHovered] = useState(false)

    const handleStoreClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            console.log("Store button clicked in mobile view")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen -mt-28 -mb-40">
            {/* Envolvemos todo el botón en Link para que funcione el redireccionamiento */}
            <Link href="/store">
                <div
                    className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleStoreClick}
                >
                    {/* Círculo pequeño que aparece al hacer hover */}
                    <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                    />
                </div>
            </Link>
            
            {/* Contenedor del texto */}
            <div className="relative mt-2 text-center text-[1.125rem] font-broone transition-all duration-500 ease-in-out">
                <div className={`${isHovered ? 'hidden' : 'block'}`}>
                    Visit our store<br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div className={`${isHovered ? 'block' : 'hidden'}`}>
                    License and download<br />
                    images and animations<br />
                    created by world-<br />
                    renowned artists. Use them<br />
                    for album covers, posters,<br />
                    merchandise, and more.
                </div>
            </div>
        </div>
    )
}