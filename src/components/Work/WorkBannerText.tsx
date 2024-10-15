import React from 'react'

const WorkBannerText = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Flex 1 */}
            <div className="flex flex-col pt-[15%] pl-[10%]">
                <h1 className="font-marcellus text-[2.5rem]">CREATE WITH</h1>
                <h1 className="font-broone text-[2.5rem] pl-[5%]">OUR BENEFITS</h1>
            </div>

            {/* Flex 2 */}
            <div className="flex flex-row mt-8">
                {/* Columna 1 */}
                <div className="w-1/2"></div>
                {/* Columna 2 */}
                <div className="w-1/2">
                    <div className="font-satoshi-light text-[1rem] leading-[1.25]">
                        <p>° &nbsp;Dedicated team</p>
                        <p>&nbsp;&nbsp;  made of Project</p>
                        <p>&nbsp;&nbsp;  Managers,</p>
                        <p>&nbsp;&nbsp;  Designers,</p>
                        <p>&nbsp;&nbsp;  Creative Directors</p>
                        <p>&nbsp;&nbsp;  and Customer</p>
                        <p>&nbsp;&nbsp;  Success Manager.</p>
                    </div>
                    <div className="font-satoshi-light text-[1rem] leading-[1.25] pl-[45%] mt-4">
                        <p>°&nbsp; Unlimited user on</p>
                        <p>&nbsp;&nbsp; the Spektrum</p>
                        <p>&nbsp;&nbsp; platform, where</p>
                        <p>&nbsp;&nbsp; project briefing,</p>
                        <p>&nbsp;&nbsp; collaboration, and</p>
                        <p>&nbsp;&nbsp; review happen.</p>
                    </div>
                    <div className="font-satoshi-light text-[1rem] leading-[1.25] mt-4">
                        <p>°&nbsp;&nbsp;We provide</p>
                        <p>&nbsp;&nbsp; contractual and</p>
                        <p>&nbsp;&nbsp; legal support for the</p>
                        <p>&nbsp;&nbsp; illustration services.</p>
                    </div>
                </div>
            </div>

            {/* Flex 3 */}
            <div className="flex flex-col mt-8">
                <h2 className="font-marcellus text-[1.5rem] pl-[10%]">HERE IS A</h2>
                <h2 className="font-marcellus text-[1.875rem] pl-[5%]">TASTE OF WHAT</h2>
                <h2 className="font-broone text-[1.875rem] pl-[20%]">WE CAN DO</h2>
            </div>
        </div>
    )
}

export default WorkBannerText