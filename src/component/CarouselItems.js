import React, { useState } from 'react';

const CarouselItems = ({ carouselItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClick = (index) => {
    setIsImageModalOpen(true);
    setActiveIndex(index);
  };

  // 檢查是否只有一張圖片
  if (carouselItems.length === 1) {
    return (
      <div className="relative h-full flex items-center justify-center">
        {isImageModalOpen ? (
          <div
            className="fixed transition-all duration-300 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setIsImageModalOpen(false)}
          >
            <img
              className="max-h-80 max-w-80 rounded-lg"
              src={carouselItems[activeIndex]}
              alt="carousel-item"
            />
          </div>
        ) : (
          <div className="bg-cover aspect-[16/9] max-h-44">
            <img
              className="rounded-lg cursor-pointer"
              src={carouselItems[0]}
              alt="carousel-item"
              onClick={() => setIsImageModalOpen(true)}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-64 sm:h-full flex items-center justify-center">
      {isImageModalOpen ? (
        <div
          className="fixed transition-all duration-300 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setIsImageModalOpen(false)}
        >
          <img
            className="max-h-80 max-w-80 rounded-lg"
            src={carouselItems[activeIndex]}
            alt="carousel-item"
          />
        </div>
      ) : (
        <>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-white bg-stone-800 rounded-full p-2 transition-opacity duration-300 opacity-75 hover:opacity-50"
            onClick={handlePrev}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-white bg-stone-800 rounded-full p-2 transition-opacity duration-300 opacity-75 hover:opacity-50"
            onClick={handleNext}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {carouselItems.map((image, index) => (
            <img
              key={index}
              className={`absolute flex justify-center rounded-lg h-auto max-h-52 transform transition-transform duration-300 ${
                index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              src={image}
              alt="carousel-item"
              onClick={() => setIsImageModalOpen(true)}
            />
          ))}
          <ul className="absolute flex justify-center space-x-2 bottom-3 left-1/2 transform -translate-x-1/2">
            {carouselItems.map((_, index) => (
              <li
                key={index}
                className={`w-1 h-1 rounded-full cursor-pointer ${
                  index === activeIndex ? 'bg-white' : 'bg-stone-500'
                }`}
                onClick={() => handleClick(index)}
              ></li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CarouselItems;
