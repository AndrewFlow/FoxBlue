import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contacts.css';
import img from '../../img/workprocess_vertical-1.png';


function Contacts() {
    return (
        <>
            <Header isMain={false} />
            <main>
                <section className='contacts'>
                    <div className='container'>
                        <div className='contacts__info'>
                            <h2 className='contacts__title title'>Контакты</h2>
                            <p className='contacts__subtitle'>Вы можете связаться с нами через электронную почту
                                , группу VK или позвонить нам напрямую</p>
                        </div>
                        <div className='contacts__inner'>
                            <div className='contacts__imagecontainer'>
                                <img className='contacts__img' src={img}></img>
                            </div>
                            <div className='contacts__items'>
                                <div className='contacts__item'>
                                    <span className='contacts__about'>Почтовый ящик</span>
                                    <span className='contacts__link'>test@mail.ru</span>
                                </div>
                                <div className='contacts__item'>
                                    <span className='contacts__about'>Группа VK</span>
                                    <a href='#' className='contacts__link'>https://test.ru</a>
                                </div>
                                <div className='contacts__item'>
                                    <span className='contacts__about'>Телефон</span>
                                    <span className='contacts__link'>81234567890</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;