import React from 'react';
import './Hero.css';
import sample from '../../img/water.mp4';
function Hero() {
    return (
        <section className="hero">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className="hero__body">
                <h1 className="hero__title">
                    <span className='colorSpan'>T</span>
                    <span>i</span>
                    <span>m</span>
                    <span>o</span>
                    <span>f</span>
                    <span>e</span>
                    <span>y</span>
                    <span className='colorSpan'>A</span>
                    <span>n</span>
                    <span>t</span>
                    <span>o</span>
                    <span>n</span>
                    <span>o</span>
                    <span>v</span>
                    <span className='colorSpan'>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                </h1>
                <p className="hero__subtitle">Музыкальные клипы,реклама и не только</p>
                <div className="box-1">
                    <div className='scrolldown'>
                        <div className="chevrons">
                            <div className='chevrondown'></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;