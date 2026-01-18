
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OUTREACH_DATA } from '../constants';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? OUTREACH_DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === OUTREACH_DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] w-full h-[600px] m-auto py-16 px-4 relative group">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Recent Outreaches</h2>
        <p className="text-gray-600 mt-2">See how we are making a difference in the field.</p>
      </div>
      
      <div
        style={{ backgroundImage: `url(${OUTREACH_DATA[currentIndex].imageUrl})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-12">
          <div className="text-white max-w-xl animate-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{OUTREACH_DATA[currentIndex].title}</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{OUTREACH_DATA[currentIndex].description}</p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-4 space-x-2">
        {OUTREACH_DATA.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full h-2 ${
              currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
