'use client'

import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css' // Importamos el archivo CSS personalizado

const ContactForm = () => {
    const [selectedForm, setSelectedForm] = useState<'client' | 'artist'>('client')
    const [isHoveredClient, setIsHoveredClient] = useState(false)
    const [isHoveredArtist, setIsHoveredArtist] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        services: '',
        note: ''
    })

    useEffect(() => {
        setSelectedForm('client')
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <div className="flex w-full">
            {/* Columna 1 */}
            <div className="w-1/2 pt-[15%] pl-[6%]">
                <h1 className="font-broone text-[2.5rem] pl-[10%]">LET’S TALK</h1>
                <div className="flex flex-row mt-4 space-x-32">
                    <div
                        className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                        onMouseEnter={() => setIsHoveredClient(true)}
                        onMouseLeave={() => setIsHoveredClient(false)}
                        onClick={() => setSelectedForm('client')}
                    >
                        <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                                isHoveredClient || selectedForm === 'client' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}
                        />
                        <span
                            className="absolute left-full ml-2 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out opacity-100 translate-x-0"
                        >
                            I’m a Client
                        </span>
                    </div>
                    <div
                        className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                        onMouseEnter={() => setIsHoveredArtist(true)}
                        onMouseLeave={() => setIsHoveredArtist(false)}
                        onClick={() => setSelectedForm('artist')}
                    >
                        <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                                isHoveredArtist || selectedForm === 'artist' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}
                        />
                        <span
                            className="absolute left-full ml-2 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out opacity-100 translate-x-0"
                        >
                            I’m an Artist
                        </span>
                    </div>
                </div>
                {selectedForm === 'client' && (
                    <form onSubmit={handleSubmit} className="flex flex-col p-[5%_3%_0_3%] m-0 mb-3%">
                        <h2 className="font-marcellus text-[1.5rem]">Contact information</h2>
                        <p className="font-satoshi-light text-[1rem]">Fill out the form below, tell us a little about your business and we will contact you soon</p>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Name*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                placeholder="Note"
                                className="w-full bg-black text-white border-b border-white p-2 h-32 placeholder-white text-right"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-[15%]">
                            <button
                                type="submit"
                                className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                            >
                                <div
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0`}
                                />
                            </button>
                            <span className="mt-2 text-white text-[1.125rem] font-broone">Submit</span>
                        </div>
                    </form>
                )}
                {selectedForm === 'artist' && (
                    <form onSubmit={handleSubmit} className="flex flex-col p-[5%_3%_0_3%] m-0 mb-3%">
                        <h2 className="font-marcellus text-[1.5rem]">Contact information</h2>
                        <p className="font-satoshi-light text-[1rem]">Fill out the form below, tell us a little about your business and we will contact you soon</p>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Name*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone number*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <input
                                type="text"
                                name="services"
                                value={formData.services}
                                onChange={handleChange}
                                required
                                placeholder="What services are you interested in?*"
                                className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                            />
                        </div>
                        <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                placeholder="Note"
                                className="w-full bg-black text-white border-b border-white p-2 h-32 placeholder-white text-right"
                            />
                        </div>
                        <div className="flex flex-col items-center mt-[15%]">
                            <button
                                type="submit"
                                className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
                            >
                                <div
                                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-0`}
                                />
                            </button>
                            <span className="mt-2 text-white text-[1.125rem] font-broone">Submit</span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm