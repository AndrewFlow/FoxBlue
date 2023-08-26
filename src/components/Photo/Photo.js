import React from 'react';
import './Photo.css';

function Photo() {
    return (
        <section className="photo-grid">
            <h2 className="photo-grid__title title"><span className='colorSpan'>Back</span>stage</h2>
            <div className="photo-grid__body">
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
                <img className="photo-grid__item" src="https://placehold.co/500x500" alt="Backstage"></img>
            </div>
        </section>
    )
}

export default Photo;