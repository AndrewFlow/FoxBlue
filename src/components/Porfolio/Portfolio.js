import React from 'react';
import './Portfolio.css';
function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title title">Наши работы</h2>
            <div className="slider">
                <input type="radio" name="slider" title="slide1" checked="checked" className="slider__nav" />
                <input type="radio" name="slider" title="slide2" className="slider__nav" />
                <input type="radio" name="slider" title="slide3" className="slider__nav" />
                <input type="radio" name="slider" title="slide4" className="slider__nav" />
                <input type="radio" name="slider" title="slide5" className="slider__nav" />
                <input type="radio" name="slider" title="slide6" className="slider__nav" />
                <div className="slider__inner">
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/ZPJZz3eBGyU" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/WvCyDIo2a1w" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/kgrT5E6kjSM" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/i1EIipkvb6A" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/JQ2kHCNZNMM" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div className="slider__contents">
                        <iframe className="slider__frame" src="https://www.youtube.com/embed/qktX_X2HHG4" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;