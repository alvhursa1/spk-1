import EnquireButton from "../Buttons/EnquireButtton";
import BnnerImageSmootArtists from "../ImageSmoot/BnnerImageSmootArtists";


export default function TwoColumnLayout() { 
  
  return (

      <div className="flex justify-between">
        {/* Columna izquierda: Texto */}
        <div className="w-1/2 z-10 text-left leading-tight pt-[10%]">
          {/* Texto del título */}
          <h1 className="font-marcellus text-[2.5rem] pl-[10%] ">
            Meet our
          </h1>
          <h1 className="line-artists font-broone text-[2.5rem] pl-[24%] text-white">
            Artists
          </h1>

          {/* Párrafo 2 con líneas y animación */}
          <div className="pt-[5%] pl-[38%]">
            {/* Primera línea del párrafo 2 */}
            <div className="paragraph2-line">
              <span className="font-broone text-[1rem]">
                Our diverse{' '}
              </span>
              <span className="font-satoshi-light text-[1rem]">
                roster
              </span>
            </div>

            {/* Resto del párrafo 2 */}
            <p className="paragraph2-line font-satoshi-light text-[1rem]">
              covers the entire
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1rem]">
              spektrum of creativity,
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1rem]">
              allowing us to cater
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1rem]">
              to a wide range of
            </p>
            <p className="paragraph2-line font-satoshi-light text-[1rem]">
              client needs
            </p> 
            <EnquireButton />
          </div>
          <div className="pt-[0%]">

          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="pr-[5%] pt-[3%]">
        <BnnerImageSmootArtists  />
      </div>
      </div>

  )
}