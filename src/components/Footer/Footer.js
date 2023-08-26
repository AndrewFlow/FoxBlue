import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer__body'>
                <span className='footer__copyright'>&copy;Timofey Antonov Production 2023</span>
                <a className='footer__container' href=''>
                    <img className='footer__img' src='https://placehold.co/30x30'></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;