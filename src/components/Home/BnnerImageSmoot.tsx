import Image from 'next/image'

interface BnnerImageSmootProps {
  mousePosition: { x: number; y: number }
}

export default function BnnerImageSmoot({ mousePosition }: BnnerImageSmootProps) {
  return (
    <div
      className="relative w-[90vw] h-[100vh] overflow-hidden"
      style={{
        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      <Image
        src="/images/figures/banner-1-home-specktrum.webp"
        alt="Banner de Spektrum"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL="/images/figures/banner-1-home-specktrum-blur.webp"
        style={{
          objectFit: 'contain',
          objectPosition: '70% center', // Mueve la imagen hacia la derecha
          transition: 'all 0.5s ease-in-out',
        }}
      />
    </div>
  )
}
