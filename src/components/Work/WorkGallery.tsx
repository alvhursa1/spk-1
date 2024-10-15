'use client'

import React, { useState } from 'react'
import CreateNow from '../Buttons/CreateNow'

interface Work {
    src: string
    title: string
    description: string
}

const works: Work[] = [
    { src: '/images/work1.png', title: 'Flyer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida feugiat leo, quis luctus velit suscipit nec. Vestibulum sem nisl, rhoncus sit amet neque et, malesuada mollis nisl. Maecenas vel maximus urna. Donec egestas diam a semper auctor. Mauris egestas fermentum libero, sit amet auctor dolor rutrum id. Duis malesuada, neque id porttitor feugiat, sem tortor accumsan dui, a finibus sem diam sit amet turpis. Cras aliquet facilisis sodales. Sed iaculis turpis eu nulla placerat, ut scelerisque lorem bibendum. Proin sed egestas felis. Donec imperdiet efficitur est, eu mattis nibh accumsan at. Aliquam suscipit molestie odio, non pellentesque lacus tempor et. Aliquam eget gravida massa.' },
    { src: '/images/work2.png', title: 'Illustration', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Illustration description.' },
    { src: '/images/work3.png', title: 'Poster', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Poster description.' },
    { src: '/images/work4.png', title: 'Packaging illustration', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Packaging illustration description.' },
    { src: '/images/work5.png', title: 'Clothing illustration', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Clothing illustration description.' },
    { src: '/images/work6.png', title: 'Banner', description: 'Sed malesuada placerat augue sit amet commodo. Cras a ex et neque lobortis placerat. Aenean sit amet commodo lacus. Fusce aliquam sagittis nunc at commodo. Nullam vitae rhoncus diam. Praesent nec blandit est, ut posuere purus. Nunc turpis turpis, hendrerit sit amet tortor ut, consectetur volutpat elit. Nulla rhoncus ornare tempor.' },
    { src: '/images/work7.png', title: 'Album Cover', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Album Cover description.' },
    { src: '/images/work8.png', title: 'Book cover', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Book cover description.' },
    { src: '/images/work9.png', title: 'Infographic', description: 'Proin metus erat, pretium vel hendrerit eget, cursus eget libero. Phasellus non ipsum lacus. Vivamus dapibus volutpat enim. Cras rhoncus lobortis congue. Mauris nec arcu sit amet arcu vulputate maximus. Sed ut congue justo, in facilisis nisl. In in mi quis ipsum dignissim ullamcorper.' },
    { src: '/images/work10.png', title: 'Type setting design', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Type setting design description.' },
]

const WorkGallery = () => {
    const [selectedWork, setSelectedWork] = useState<Work | null>(null)

    return (
        <div className="relative w-full h-200vh mt-[5%]">
            <div className="flex w-full h-full">
                {/* Columna 1 */}
                <div className="w-[70%] flex flex-wrap">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className={`w-1/2 h-[50vh] relative ${selectedWork && selectedWork.src !== work.src ? 'opacity-50' : 'opacity-100'}`}
                            onMouseEnter={() => setSelectedWork(work)}
                            onMouseLeave={() => setSelectedWork(null)}
                        >
                            <img src={work.src} alt={work.title} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-full flex justify-center items-center mt-4">
                        <CreateNow />
                    </div>
                </div>

                {/* Columna 2 */}
                <div className="w-[30%] p-8 flex flex-col items-center justify-center sticky top-0 h-screen">
                    {selectedWork && (
                        <>
                            <img src={selectedWork.src} alt={selectedWork.title} className="w-1/2 h-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-4">{selectedWork.title}</h2>
                            <p className="text-base leading-tight">
                                {selectedWork.description}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WorkGallery