import React from 'react';
import './Offers.css';

function Offers() {
    return (
        <section className="offers" id='offers'>
            <h2 className="offers__title title">Наши работы</h2>
            <article className="offer">
                <h2 className="offer__title">Osovets <span className='colorSpan'>"Мощь"</span></h2>
                <div className="offer__website">
                    <p className="offer__url">URL</p>
                    <a href="https://www.youtube.com/@osovetsofficial2926" target="_blank" className="offer__adress">osovetsofficial</a>
                </div>

                <iframe className='offer__image' src="https://www.youtube-nocookie.com/embed/ZPJZz3eBGyU" title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

                <div className="offer__paragraphs">
                    <p className="offer__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam tempore
                        eos animi omnis nobis excepturi amet qui tempora, rerum nulla numquam quis laudantium ab. Rerum officiis
                        debitis ullam cupiditate.
                    </p>

                </div>
            </article>
            <article className="offer">
                <h2 className="offer__title">"Один день в <span className='colorSpan'>Тарусе</span>"</h2>
                <div className="offer__website">
                    <p className="offer__url">URL</p>
                    <p href="https://www.youtube.com/watch?v=WvCyDIo2a1w" target="_blank" className="offer__adress">Тимофей Антонов</p>
                </div>
                <iframe className ="offer__image" src="https://www.youtube-nocookie.com/embed/WvCyDIo2a1w"
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                <div className="offer__paragraphs">
                    <p className="offer__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam tempore
                        eos animi omnis nobis excepturi amet qui tempora, rerum nulla numquam quis laudantium ab. Rerum officiis
                        debitis ullam cupiditate.
                    </p>

                </div>
            </article>
            <article className="offer">
                <h2 className="offer__title">Ophelia Wisser - <span className='colorSpan'>"Edge of the Line"</span></h2>
                <div className="offer__website">
                    <p className="offer__url">URL</p>
                    <a href="https://www.youtube.com/@opheliawisser1055" target="_blank" className="offer__adress">OPHELIA WISSER</a>
                </div>
                <iframe className='offer__image' src="https://www.youtube-nocookie.com/embed/kgrT5E6kjSM"
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className="offer__paragraphs">
                    <p className="offer__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam tempore
                        eos animi omnis nobis excepturi amet qui tempora, rerum nulla numquam quis laudantium ab. Rerum officiis
                        debitis ullam cupiditate.
                    </p>

                </div>
            </article>
        </section>
    );
}

export default Offers;