'use client'

import React from 'react'
import EnquireMail from '../Mail/EnquireMail'

export default function TwoColumnLayout() {
    return (
        <div className="flex flex-wrap p-[15%_3%_0_3%] m-0">
            {/* Columna 1 izquierda */}
            <div className="w-1/2 p-0 text-left">
                <h1 className="font-marcellus text-[2.5rem] text-right leading-tight">
                    Choose the artists you wish to<br />
                    <span className="inline-block">
                        work with
                    </span>
                </h1>
                <h2 className="font-satoshi-light text-[1rem] px-[10%] mt-4 text-justify pt-[5%] leading-tight">
                    Interested in commissioning an illustration, or hearing more about what we can do for you? Fill in our form with as much information as you possibly can — and we’ll get back to you with a recommendation and quote within 48 hours. <br />
                    <br />
                    <br />
                    Mandatory*
                </h2>
                <EnquireMail />
            </div>
            {/* Columna 2 derecha */}
            <div className="w-1/2 p-0">
                {/* Contenido futuro */}
            </div>
        </div>
    )
}