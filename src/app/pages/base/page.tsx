"use client"
import React,{useEffect, useState} from 'react';
import $ from 'jquery'
import Image from 'next/image';
import ocean from "../../../../public/images/res.jpg";
import sea from '../../../../public/images/res.jpg';
import woman from '../../../../public/images/res.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
  loop: false,
  margin: 10,
  items: 1,
  autoplay: false,
};

export default function Basepage() {

    const [windows,setwindows] = useState<any>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setwindows(window);
            window.$ = window.jQuery = $
        }
      }, [typeof window ]);
  return (
    <div>
     {windows && 
     <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <Image
            src={ocean}
            alt="Ocean"
            width={100}
            height={100}
          />
        </div>
        <div className="item">
          <Image
            src={sea}
            alt="Sea"
            width={100}
            height={100}
          />
        </div>
        <div className="item">
          <Image
            src={woman}
            alt="Woman"
            width={100}
            height={100}
          />
        </div>
      </OwlCarousel>
      </div>
      
      }
    </div>
  );
}
