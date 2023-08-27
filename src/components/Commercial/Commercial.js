import React from 'react';
import './Commercial.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/bundle';

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
