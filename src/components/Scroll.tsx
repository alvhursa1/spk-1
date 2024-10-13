'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set())

  const lines = [
    {
      text: 'MEET YOUR',
      className: 'font-marcellus pl-[30%] leading-none',
      style: {
        fontSize: 'calc(22.95775px + 1.87793vw)',
        lineHeight: '1.2',
      },
    },
    {
      text: 'CREATIVE',
      className: 'font-marcellus pl-[20%] leading-none',
      style: {
        fontSize: 'calc(24.95775px + 1.87793vw)',
        lineHeight: '1.2',
      },
    },
    {
      text: 'PARTNER',
      className: 'font-broone pl-[55%] leading-none relative z-10',
      style: {
        fontSize: 'calc(24.95775px + 1.87793vw)',
        lineHeight: '1.2',
      },
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wordIndex = parseInt(entry.target.getAttribute('data-index') || '0', 10)
          setVisibleWords((prev) => {
            const newSet = new Set(prev)
            if (entry.isIntersecting) {
              newSet.add(wordIndex)
            } else {
              newSet.delete(wordIndex)
            }
            return newSet
          })
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    )

    const wordElements = containerRef.current?.querySelectorAll('.word')
    wordElements?.forEach((el) => observer.observe(el))

    return () => {
      wordElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
      <div ref={containerRef} className="w-full max-w-4xl">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className={line.className} style={line.style}>
            {line.text.split(' ').map((word, wordIndex) => {
              const globalWordIndex = lines.slice(0, lineIndex).flatMap(l => l.text.split(' ')).length + wordIndex
              return (
                <span
                  key={wordIndex}
                  className={`word inline-block transition-colors duration-1000 ease-in-out ${
                    visibleWords.has(globalWordIndex) ? 'text-white' : 'text-transparent'
                  }`}
                  data-index={globalWordIndex}
                >
                  {word}{' '}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}