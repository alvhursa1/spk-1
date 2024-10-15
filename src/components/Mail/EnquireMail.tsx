'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { artists } from '../../data/artists'
import './EnquireMail.css' // Importamos el archivo CSS personalizado

export default function EnquireMail() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        company: string;
        artist: string;
        budget: string;
        projectType: string;
        brief: string;
        deadline: Date;
        file: File | null;
    }>({
        name: '',
        email: '',
        company: '',
        artist: '',
        budget: '',
        projectType: '',
        brief: '',
        deadline: new Date(),
        file: null
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setFormData({ ...formData, deadline: date })
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file.size <= 16 * 1024 * 1024) { // 16MB
            setFormData({ ...formData, file })
        } else {
            alert('File size exceeds 16MB')
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formDataToSend: Record<string, unknown> = {}
        Object.keys(formData).forEach(key => {
            const value = formData[key as keyof typeof formData];
            if (value instanceof Date) {
                formDataToSend[key] = value.toISOString();
            } else if (value instanceof File) {
                formDataToSend[key] = value;
            } else if (value !== null) {
                formDataToSend[key] = value;
            }
        })
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formDataToSend,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-[5%_3%_0_3%] m-0 mb-3%">
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
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                />
            </div>
            <div className="w-full p-0 mb-4 relative font-marcellus text-[1rem]">
                <select
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right custom-scrollbar"
                >
                    <option value="">Artists</option>
                    {artists.map((artist) => (
                        <option key={artist.id} value={artist.name} className="p-2">{artist.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                >
                    <option value="">What&rsquo;s your budget?*</option>
                    <option value="$1.500 - $2.500">$1.500 - $2.500</option>
                    <option value="$2.500 - $5.000">$2.500 - $5.000</option>
                    <option value="$5.000 - $7.500">$5.000 - $7.500</option>
                    <option value="$7.500 - $10.000">$7.500 - $10.000</option>
                    <option value="+$10.000">+$10.000</option>
                    <option value="i'm not sure">I&apos;m not sure</option>
                </select>
            </div>
            <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                >
                    <option value="">Type of project*</option>
                    <option value="Illustration">Illustration</option>
                    <option value="Mural">Mural</option>
                    <option value="Animation">Animation</option>
                </select>
            </div>
            <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                <textarea
                    name="brief"
                    value={formData.brief}
                    onChange={handleChange}
                    placeholder="The Brief: Describe your project or campaign"
                    className="w-full bg-black text-white border-b border-white p-2 h-32 placeholder-white text-right"
                />
            </div>
            <div className="w-full p-0 mb-4 flex justify-end border-b border-white font-marcellus text-[1rem]">
                <div className="w-1/3">
                    <div className="relative">
                        <label className="block text-right font-marcellus text-[1rem] text-white">Deadline</label>
                        <DatePicker
                            selected={formData.deadline}
                            onChange={handleDateChange}
                            className="w-full bg-black text-white p-2 text-right"
                            minDate={new Date()}
                            calendarClassName="custom-datepicker"
                            popperPlacement="bottom-end"
                        />
                    </div>
                </div>
            </div>
            {/* Campo para subir archivos */}
            <div className="w-full p-0 mb-4 font-marcellus text-[1rem]">
                <input
                    type="file"
                    name="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="w-full bg-black text-white border-b border-white p-2 placeholder-white text-right"
                    placeholder="Upload File"
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
    )
}