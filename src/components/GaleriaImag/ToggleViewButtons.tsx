'use client';

import { useState, useEffect } from 'react';

interface ToggleViewButtonsProps {
  view: string;
  setView: (view: string) => void;
}

export default function ToggleViewButtons({ view, setView }: ToggleViewButtonsProps) {
  const [isHoveredGrid, setIsHoveredGrid] = useState(false);
  const [isHoveredList, setIsHoveredList] = useState(false);

  // Similar al comportamiento de StoreButton para manejar hover
  useEffect(() => {
    let timerGrid: NodeJS.Timeout;
    let timerList: NodeJS.Timeout;

    if (isHoveredGrid) {
      timerGrid = setTimeout(() => {
        setIsHoveredGrid(false);
      }, 2000);
    }

    if (isHoveredList) {
      timerList = setTimeout(() => {
        setIsHoveredList(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timerGrid);
      clearTimeout(timerList);
    };
  }, [isHoveredGrid, isHoveredList]);

  return (
    <div className="flex space-x-4 mt-10">
      {/* Botón para la vista Grid */}
      <div
        className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
        onMouseEnter={() => setIsHoveredGrid(true)}
        onMouseLeave={() => setIsHoveredGrid(false)}
        onClick={() => setView('grid')}
      >
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
            isHoveredGrid ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />
        <span className="hidden md:block absolute left-full ml-2 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out opacity-100 translate-x-0">
          Grid
        </span>
      </div>

      {/* Botón para la vista List */}
      <div
        className="relative w-[2.125rem] h-[2.125rem] rounded-full border-2 border-white cursor-pointer transition-all duration-500 ease-in-out group"
        onMouseEnter={() => setIsHoveredList(true)}
        onMouseLeave={() => setIsHoveredList(false)}
        onClick={() => setView('list')}
      >
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1rem] h-[1rem] rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
            isHoveredList ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />
        <span className="hidden md:block absolute left-full ml-2 whitespace-nowrap text-[1.125rem] top-1/2 transform -translate-y-1/2 font-broone transition-all duration-500 ease-in-out opacity-100 translate-x-0">
          List
        </span>
      </div>
    </div>
  );
}
