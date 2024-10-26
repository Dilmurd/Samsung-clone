import React, {useRef} from 'react'
import "./Hero.scss"
import rasm from "../../assets/s.jpg"
import rasm2 from "../../assets/s2.jpg"
import rasm3 from "../../assets/s3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

function Hero() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <main>
        <section className='hero'>
            <div className="container">
        <Swiper 
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        navigation={true} 
        modules={[Navigation, Autoplay, Pagination]} 
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="hero__carousel">
        <SwiperSlide>
            <img src={rasm} alt="" className='img' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={rasm2} alt="" className='img'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={rasm3} alt="" className='img'/>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        </Swiper>
            </div>
        </section>
    </main>
  )
}

export default Hero