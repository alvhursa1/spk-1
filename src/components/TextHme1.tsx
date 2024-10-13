'use client';

import localFont from 'next/font/local';

// Fuentes personalizadas cargadas localmente
const marcellusFont = localFont({ src: '../app/fonts/Marcellus-Regular.ttf' });
const brooneFont = localFont({ src: '../app/fonts/Broone.otf' });
const satoshiLight = localFont({ src: '../app/fonts/Satoshi-Light.otf' });
const satoshiBold = localFont({ src: '../app/fonts/Satoshi-Bold.otf' });

export default function TextHme1() {
  return (
    <div className="relative w-full h-auto">
      {/* Flex de 2 columnas para el Párrafo 1 */}
      <div className="flex w-full">
        {/* Columna izquierda con el Párrafo 1 */}
        <div className="w-1/2 text-left mb-8 pt-[5%]"> {/* Padding top para el párrafo 1 */}
          <p
            className={`text-left ${marcellusFont.className} pl-[2.5%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            Representing top
          </p>
          <p
            className={`text-left ${brooneFont.className} pl-[10%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            illustrators
          </p>
          <p
            className={`text-left ${marcellusFont.className} pl-[8%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            who produce captivating
          </p>
          <p
            className={`text-left ${brooneFont.className} pl-[8%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            children&apos;s, decorative
          </p>
          <p
            className={`text-left ${brooneFont.className} pl-[18%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            & advertising works
          </p>
          <p
            className={`text-left ${marcellusFont.className} pl-[16%]`}
            style={{
              fontSize: 'calc(22.29577px + .18779vw)',
              lineHeight: '1.2',
              color: 'white',
            }}
          >
            on commission or license
          </p>
        </div>
        {/* Columna derecha vacía */}
        <div className="w-1/2"></div>
      </div>

      {/* Flex de 2 columnas para el Párrafo 2 */}
      <div className="flex w-full">
        {/* Columna izquierda vacía */}
        <div className="w-1/2"></div>

        {/* Columna derecha con el Párrafo 2 */}
        <div className="w-1/2 text-right pr-[3%] pt-[4%]"> {/* Padding top para el párrafo 2 */}
          <div className="inline-block text-left">
            <p
              className={`${satoshiLight.className}`}
              style={{
                fontSize: 'calc(13.29577px + .18779vw)',
                lineHeight: '1.1',
                color: 'white',
              }}
            >
              We are driven by
            </p>
            <p
              className={`${satoshiBold.className}`} // Cambia a la fuente Satoshi-Bold
              style={{
                fontSize: 'calc(13.29577px + .18779vw)',
                lineHeight: '1.1',
                color: 'white',
              }}
            >
              creativity, authenticity
            </p>
            <p
              className={`${satoshiLight.className}`}
              style={{
                fontSize: 'calc(13.29577px + .18779vw)',
                lineHeight: '1.1',
                color: 'white',
              }}
            >
              and a deep commitment
            </p>
            <p
              className={`${satoshiLight.className}`}
              style={{
                fontSize: 'calc(13.29577px + .18779vw)',
                lineHeight: '1.1',
                color: 'white',
              }}
            >
              to our artists and clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
