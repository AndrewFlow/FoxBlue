import React from 'react';
import './Intro.css';
import img from '../../img/workprocess_vertical-2.png'

function Intro() {
    return (
        <section className="intro" id='intro'>
            <div className='intro__imagecontainer'>
                <img src={img} className='intro__image'></img>
            </div>
            <div className='intro__body'>
                <h2 className="intro__title title"><span className='colorSpan'>Привет! </span>Меня зовут Тимофей</h2>
                <p className="intro__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem voluptatibus quasi ab, error eveniet numquam vel iste, laboriosam hic
                    deserunt cupiditate aspernatur animi. Delectus, aspernatur quod.
                    Necessitatibus voluptates ipsum enim!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem voluptatibus quasi ab, error eveniet numquam vel iste</p>
            </div>
        </section >
    );
}

export default Intro;