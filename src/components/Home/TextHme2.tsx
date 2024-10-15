'use client';

import localFont from 'next/font/local';
import AboutButton from '../Buttons/AboutButton'; // Importar el componente AboutButton
import Scroll from './ScrollText'; // Importar el componente Scroll

// Fuentes personalizadas cargadas localmente
const satoshiLight = localFont({ src: './../../app/fonts/Satoshi-Light.otf' });
const satoshiBold = localFont({ src: './../../app/fonts/Satoshi-Bold2.otf' });

const TextHme2: React.FC = () => {


  // Párrafo 1
  const paragraph1 = [
    { text: 'We are an Illustration', bold: 'Illustration' },
    { text: 'and design agency', bold: 'and design agency' },
    { text: 'focused on helping and', bold: '' },
    { text: 'supporting companies,', bold: '' },
    { text: 'editorial houses and', bold: '' },
    { text: 'executive groups in their', bold: '' },
    { text: 'creative endeavors.', bold: '' },
  ];

  // Párrafo 2
  const paragraph2 = [
    { text: 'With a team of over 70 talented artists with unique', bold: '70 talented artists' },
    { text: 'styles and design lines we aim to provide a wide', bold: '' },
    { text: 'range of services, from banners, illustrations,', bold: 'banners, illustrations,' },
    { text: 'album covers to even fashion and clothing', bold: 'album covers to even fashion and clothing' },
    { text: 'designs.', bold: 'designs.' },
  ];

  // Párrafo 3 con los paddings solicitados
  const paragraph3 = [
    {
      text: (
        <>
          <span className="font-marcellus">Boost your </span>
          <span className="font-broone">visual impact, </span>
          <span className="font-marcellus">and</span>
        </>
      ),
      paddingLeft: '10%',
    },
    {
      text: (
        <>
          <span className="font-marcellus">access a one-of-a-kind bank</span>
        </>
      ),
      paddingLeft: '37%',
    },
    {
      text: (
        <>
          <span className="font-marcellus">of talented </span>
          <span className="font-broone">worldwide artists.</span>
        </>
      ),
      paddingLeft: '17%',
    },
  ];

  // Renderizar párrafos con textos en bold
  const renderText = (textArray: { text: string; bold?: string; className?: string }[]) => {
    return textArray.map((line, index) => (
      <p key={index} className={`text-left ${line.className || ''} ${satoshiLight.className}`} style={{ fontSize: '1rem', lineHeight: '1.25', color: 'white' }}>
        {line.text}
        {line.bold && <span className={`${satoshiBold.className}`}> {line.bold}</span>}
      </p>
    ));
  };

  return (
    <div className="w-full h-auto space-y-8 -mt-80 leading-tight">
      {/* Flex de 2 columnas, colocando Scroll.tsx en la columna izquierda */}
      <div className="flex">
        <div className="w-1/2">
          <Scroll />
        </div>
        <div className="w-1/2"></div>
      </div>

      {/* Segunda sección de texto (flex de 4 columnas) */}
      <div className="flex">
        <div className="w-[60%] pl-[20%] -mt-36">{renderText(paragraph1)}</div>
        <div className="w-[15%]"></div>
        <div className="w-[10%]"></div>
        <div className="w-[15%]"></div>
      </div>

      {/* Tercera sección de texto (flex de 2 columnas) */}
      <div className="flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 text-right pt-5">
          <div className="text-left">{renderText(paragraph2)}</div>
        </div>
      </div>

      {/* Cuarta sección de texto (Párrafo 3 con padding solicitado) */}
      <div className="flex">
        <div className="w-1/2 pt-10">
          {paragraph3.map((line, index) => (
            <p key={index} className="leading-none" style={{ fontSize: 'calc(22.29577px + .18779vw)', color: 'white', paddingLeft: line.paddingLeft }}>
              {line.text}
            </p>
          ))}
        </div>
        <div className="w-1/2"></div>
      </div>

      {/* Flex container con dos columnas (con AboutButton) */}
      <div className="flex justify-between mt-24">
        <div className="w-1/2 flex justify-center items-center pt-6">
          <AboutButton />
        </div>
        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default TextHme2;
