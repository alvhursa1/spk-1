import React from 'react'
import Image from 'next/image'

const FterEnquire = () => {
    return (
        <div className="w-full mt-[8%]">
            {/* Flex 1 */}
            <div className="flex w-full p-3%">
                {/* Columna 1 */}
                <div className="w-1/4 flex items-center">
                    <Image src="/LogoSpkFter.svg" alt="Logo" layout="intrinsic" objectFit="contain" width={300} height={300} />
                </div>
                {/* Columna 2 */}
                <div className="w-1/2"></div>
                {/* Columna 3 */}
                <div className="w-1/4 flex items-start justify-end pr-[3%]">
                    <a href="mailto:team@spektrumagency.us" className="text-white">team@spektrumagency.us</a>
                </div>
            </div>

            {/* Flex 2 */}
            <div className="flex w-full my-[5%]">
                {/* Columna 1 */}
                <div className="w-1/4 flex justify-center">
                    <a href="#">
                        <Image src="/LN.svg" alt="LN Logo" layout="intrinsic" objectFit="contain" width={50} height={50} />
                    </a>
                </div>
                {/* Columna 2 */}
                <div className="w-1/4 flex justify-center">
                    <a href="#">
                        <Image src="/IG.svg" alt="IG Logo" layout="intrinsic" objectFit="contain" width={42} height={42} />
                    </a>
                </div>
                {/* Columna 3 */}
                <div className="w-1/4 flex justify-center">
                    <a href="#">
                        <Image src="/WA.svg" alt="WA Logo" layout="intrinsic" objectFit="contain" width={70} height={70} />
                    </a>
                </div>
                {/* Columna 4 */}
                <div className="w-1/4 flex justify-center">
                    <a href="mailto:team@spektrumagency.us">
                        <Image src="/@.svg" alt="Email Logo" layout="intrinsic" objectFit="contain" width={46} height={46} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FterEnquire