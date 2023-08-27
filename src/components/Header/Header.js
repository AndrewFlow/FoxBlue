import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header({isMain}) {
    return (
        <>
            {
                isMain ? (
                    <header className="header">
                        <a href="#" className="header__logo">
                            <img className="header__image" src="https://placehold.co/400" alt="логотип"></img>
                        </a>
                        <nav>
                            <ul className="header__links">
                                <li className="header__item">
                                    <a className="header__link" href="#swiperinner" data-scroll="#swiperinner">Услуги</a>
                                </li>
                                <li className="header__item">
                                    <a className="header__link" href="#offers" data-scroll="#offers">Проекты</a>
                                </li>
                                <li className="header__item">
                                    <Link className="header__link" to = "/contacts">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </header >
                ) : (
                    <header className="header">
                        <a href="#" className="header__logo">
                            <img className="header__image" src="https://placehold.co/400" alt="логотип"></img>
                        </a>
                        <nav>
                            <ul className="header__links">
                                <li className="header__item">
                                    <Link className="header__link" to ="/FoxBlue">На Главную</Link>
                                </li>
                            </ul>
                        </nav>
                    </header >)
            }
        </>
    )
}

export default Header;