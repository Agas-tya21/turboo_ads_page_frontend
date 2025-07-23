'use client';
import React, { useState, useEffect, useRef } from 'react';

interface PromoItem {
  idpromo: string;
  namapromo: string;
  gambarpromo: string;
}

interface CarouselProps {
  items: PromoItem[];
  visibleCards?: number;
  imageMaxHeight?: string; // Prop baru untuk tinggi maksimum gambar
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, visibleCards = 1, imageMaxHeight = '450px', className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = Math.ceil(items.length / visibleCards);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (totalSlides <= 1) return;

    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1)),
      3000
    );

    return () => resetTimeout();
  }, [currentIndex, totalSlides]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0 grid gap-4" style={{ gridTemplateColumns: `repeat(${visibleCards}, 1fr)` }}>
            {items.slice(slideIndex * visibleCards, (slideIndex + 1) * visibleCards).map((item) => (
              <div key={item.idpromo} className="w-full">
                <img
                  src={item.gambarpromo || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'}
                  alt={item.namapromo}
                  className="w-full h-auto object-contain rounded-2xl"
                  // --- PERUBAHAN DI SINI: Menggunakan prop untuk tinggi maksimum ---
                  style={{ maxHeight: imageMaxHeight }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;