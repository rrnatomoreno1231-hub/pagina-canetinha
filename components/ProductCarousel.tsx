'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    src: '/1.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 1',
  },
  {
    src: '/2.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 2',
  },
  {
    src: '/3.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 3',
  },
  {
    src: '/4.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 4',
  },
  {
    src: '/5.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 5',
  },
  {
    src: '/6.jpg',
    alt: 'Exemplo de modelo de lápis personalizado 6',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="product-carousel" aria-label="Exemplos de lápis e canetas personalizados">
      <div className="carousel-stage">
        {SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
}
