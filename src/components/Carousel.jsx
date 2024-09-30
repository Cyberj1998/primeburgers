import React, { useState, useEffect } from 'react';
import Burger1 from '../assets/Burgers/burger_wallpaper/burger_wallpaper.png';
import Burger2 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_2.png';
import Burger3 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_3.png';
import Burger4 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_4.png';
import Burger5 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_5.png';
import Burger6 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_6.png';


const Carousel = () => {
  const images = [Burger1, Burger2, Burger3, Burger4, Burger5, Burger6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isAutoPlay) {
      intervalId = setInterval(() => goToNextImage(), 3000); // Change the interval duration (in milliseconds) for automatic slideshow
    }

    const handleUserInteraction = () => {
      setIsAutoPlay(false);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsAutoPlay(true);
      }, 5000); // Adjust the delay time (in milliseconds) before resuming automatic slideshow
    };

    let timeoutId = setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000); // Initial delay before starting automatic slideshow

    document.addEventListener('click', handleUserInteraction);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [isAutoPlay]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='h-[400px] relative'>
      <button className='absolute top-1/2 left-3 z-10 text-white font-sans font-semibold backdrop-filter backdrop-blur-xl p-[5px]' onClick={goToPrevImage}>Previous</button>
      <button className='absolute top-1/2 right-3 z-10 text-white font-sans font-semibold backdrop-filter backdrop-blur-xl p-[5px]' onClick={goToNextImage}>Next</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`h-full w-full absolute transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
