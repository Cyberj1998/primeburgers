import React from 'react';
import { Gallery } from "react-grid-gallery";
import Burger1 from '../assets/Burgers/burger_wallpaper/burger_wallpaper.png';
import Burger2 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_2.png';
import Burger3 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_3.png';
import Burger4 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_4.png';
import Burger5 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_5.png';
import Burger6 from '../assets/Burgers/burger_wallpaper/burger_wallpaper_6.png';
import Burger7 from '../assets/Burgers/Burger.jpg'
import Burger8 from '../assets/Burgers/burger2.jpg'
import Burger9 from '../assets/Burgers/burger3.jpg'
// Add more images as needed

const ResponsiveGallery = () => {

  const images = [
    {
       src: Burger1,
       width: 320,
       height: 174,

    },
    {
       src: Burger2,
       width: 320,
       height: 212,
    },
    {
       src: Burger3,
       width: 320,
       height: 212,
    },
    {
      src: Burger4,
      width: 320,
      height: 174,
   },
   {
      src: Burger5,
      width: 320,
      height: 212,
   },
   {
      src: Burger6,
      width: 320,
      height: 212,
   },
   {
    src: Burger7,
    width: 320,
    height: 174,
   },
   {
    src: Burger8,
    width: 320,
    height: 212,
   },
   {
    src: Burger9,
    width: 320,
    height: 212,
   }
 
  ];

  return (
    <div className='h-[400px] w-full overflow-scroll'>
      <Gallery images={images} />
    </div>
  );
}

export default ResponsiveGallery;
