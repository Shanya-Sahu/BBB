import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.webp';
import l8 from '../assets/l8.png';

function LogoCarousel() {
  const logos = [
    { id: 1, src: l1 },
    { id: 2, src: l2 },
    { id: 4, src: l4 },
    { id: 8, src: l8 },
    { id: 3, src: l3 },
    { id: 5, src: l5 },
    { id: 7, src: l7 },
    { id: 6, src: l6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="logo-slider w-full">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-slide flex justify-evenly items-start h-[100px] m-2">
          <img src={logo.src} alt={`logo-${logo.id}`} className='w-full h-full object-contain' />
        </div>
      ))}
    </Slider>
  );
}

export default LogoCarousel;


