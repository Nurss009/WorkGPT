import React from 'react';
import './StyleFooter.css';
import logo from '../Assets/logo.png';
import map from '../Assets/map.png';

const Footer = () => {
    return (
        <>
            <div className={'container'}>
                <div className="ds">
                    <div className="col-6">
                        <h5 className={'hh5'}>ИНФОРМАЦИЯ</h5>
                        <div className="in">
                            <div>
                                <h5 className={'hh5'}>ИНН</h5>
                                <p className={'numberr'}>246525853385</p>
                            </div>
                            <div>
                                <h5 className={'hh5'}>ОГРНИП</h5>
                                <p className={'numberr'}>320246800036639</p>
                            </div>
                        </div>
                        <h5 className={'hh5'}>Компания является резидентом</h5>
                        <p className={'numberr'}>«Агенства инновационного развития»</p>
                        <h4 className={'nomer'}>+7 (913) 532-31-67</h4>
                        <h4 className={'nomerr'}>info@ascender.space</h4>
                        <a href="/" className={'a_a'}>Политика конфиденциальности</a>
                        <div>
                            <a className={'a_a'} href="/">Условия оферты</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className={'map'} src={map} alt=""/>
                        <h4 className={'footer-h4'}>г.Санкт-Петербург,ул. Казанская, д. 7Б</h4>
                    </div>
                </div>
            </div>
            <div className="foter">
                <img className={'footer-img'} src={logo} alt=""/>
                <div className="silk">
                    <a className={'nava'} href="/">Отзывы</a>
                    <a className={' nava'} href="/">Кейс</a>
                    <a className={' nava'} href="/">FAQ</a>
                    <a className={' nava'} href="/">Команда</a>
                    <button className={'heder-Button'}>Оставить заявку</button>
                </div>
            </div>
        </>
    );
};

export default Footer;

