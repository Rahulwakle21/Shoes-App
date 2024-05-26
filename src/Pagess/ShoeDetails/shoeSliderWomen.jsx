import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import './Slider.css'
import MenWomCard from '../../common/MenWomCard';
import img1 from '../../imaggess/women2.png'
import img2 from '../../imaggess/women3.png'
import img3 from '../../imaggess/women4.png'
import img4 from '../../imaggess/women5.png'
import img5 from '../../imaggess/women6.png'
import img6 from '../../imaggess/women7.png'
import img7 from '../../imaggess/women8.png'

const ShoeSliderWomen = () => {
    return (
        <div className='mt-5'>
            <Swiper
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><MenWomCard img={img1} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 2000"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img3} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1700"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img2} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 2400"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img7} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1100"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img4} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1400"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img5} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1600"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img6} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1000"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img7} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 9000"/></SwiperSlide>
        <SwiperSlide><MenWomCard img={img1} title="just In" title2="Jorden" title3="Men's Shoes" price="$ 1300"/></SwiperSlide>
       
      </Swiper>
        </div>
    )
}

export default ShoeSliderWomen
