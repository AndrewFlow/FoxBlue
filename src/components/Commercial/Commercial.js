import React from 'react';
import './Commercial.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { EffectCards } from 'swiper/modules';
import img1 from '../../img/workprocess_vertical-1.png'
import img2 from '../../img/workprocess_vertical-2.png'
import img3 from '../../img/workprocess_vertical-3.png'
function Commercial() {
    return (
        <section className="commercial">
            <div className="plate-grid">
                <div className="plate__item">
                    <h3 className="plate__title">Рекламные ролики</h3>
                </div>
                <div className="plate__item">
                    <h3 className="plate__title">Постеры</h3>
                </div>
                <div className="plate__item">
                    <h3 className="plate__title">Рекламные видео</h3>
                </div>
                <div className="plate__item">
                    <h3 className="plate__title">Предметная съемка</h3>
                </div>
            </div>
        </section>
    );
}

export default Commercial;

/*

            */

/*
<div className='container'>
<h2 className="commercial__title title">Что мы делаем</h2>
<Swiper className='commercial__slider'
slidesPerView={1}
spaceBetween={0}
loop={true}
modules={[EffectCards]}
effect="cards"
>
<SwiperSlide >
<div className="commercial__content">
    <p className='commercial__subtitle'>Рекламные ролики</p>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="commercial__content">
    <p className='commercial__subtitle'>Постеры</p>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="commercial__content">
    <p className='commercial__subtitle'>Рекламные видео</p>
</div>
</SwiperSlide>
<SwiperSlide >
<div className="commercial__content">
    <p className='commercial__subtitle'>Предметная съемка</p>
</div>
</SwiperSlide>
</Swiper>
</div>
*/