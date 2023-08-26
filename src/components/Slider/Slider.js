import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import './Slider.css';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
//import Photo1 from '../../img/workprocess_vertical-1.png';
//import Photo2 from '../../img/workprocess_vertical-2.png';
//import Photo3 from '../../img/workprocess_vertical-3.png';
//import Photo4 from '../../img/workprocess_2.png';
//import Photo5 from '../../img/workprocess_3.png';
//import Photo6 from '../../img/workprocess_4.png';


function Swip() {
    return (
        <div className='swiperinner' id='swiperinner'>
            <h2 className='slider__title title'>Чем  <span className='colorSpan'>мы</span>  занимаемся</h2>
            <p className='slider__subtitle'>Перечень наших основных услуг</p>
            <Swiper className='slider__body'
                slidesPerView={1}
                spaceBetween={15}
                loop={true}
                modules={[EffectCoverflow]}
                effect="coverflow"
                breakpoints={{
                    // when window width is >= 640px
                    640: {

                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide >
                    <a className='slider__link' href="https://vk.com/market-191174459" target="_blank">
                        <div className="slider__contents">
                            <h3 className='slider__text'>Рекламные ролики</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='slider__link' href="https://vk.com/market-191174459" target="_blank">
                        <div className="slider__contents">
                            <h3 className='slider__text'>Постеры</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='slider__link' href="https://vk.com/market-191174459" target="_blank">
                        <div className="slider__contents">
                            <h3 className='slider__text'>Музыкальные клипы</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide >
                    <a className='slider__link' href="https://vk.com/market-191174459" target="_blank">
                        <div className="slider__contents">
                            <h3 className='slider__text'>Предметная съемка</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='slider__link' href="https://vk.com/market-191174459" target="_blank">
                        <div className="slider__contents">
                            <h3 className='slider__text'>Рекламные ролики</h3>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Swip;