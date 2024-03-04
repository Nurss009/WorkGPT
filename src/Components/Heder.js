import React, { useState, useEffect } from 'react';
import logos from "./Assets/logos.png";
import '../media.css';
import Logo_Burger from "../Components/Assets/logo_Burger.png"

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 450);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={'container'}>
            <div className={'heder '}>
                <img className={'logoburger'} src={logos} alt=""/>
                {isMobile && (
                    <svg className="burger-icon" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                        <path d="M4.05859 7.25H25.8086M4.05859 14.5H25.8086M4.05859 21.75H25.8086" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>
            {(isMobile && isMenuOpen) && (
                <div className="burger-menu">
                    <svg className="close-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                        <path d="M19.0195 1.5L1.51953 19M1.51953 1.5L19.0195 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="silka">
                        <img className={'Logo-Burger'} src={Logo_Burger} alt="Logo"/>
                        <a className={'nav_a'} href="/">Отзывы</a>
                        <a className={'nav_a'} href="/">Кейс</a>
                        <a className={'nav_a'} href="/">FAQ</a>
                        <a className={'nav_a'} href="#Team">Команда</a>
                        <a className={'Application'} href="#application">Оставить заявку</a>

                    </div>
                </div>
            )}
            {!isMobile && (

                <div className="silka hed">
                    <img className={'img-header'} src={logos} alt=""/>
                    <div className="nav-a">
                       <a className={'nav_a'} href="/">Отзывы</a>
                       <a className={'nav_a'} href="/">Кейс</a>
                       <a className={'nav_a'} href="/">FAQ</a>
                       <a className={'nav_a'} href="#Team">Команда</a>
                   </div>
                    <button className={'heder-Button'}>Оставть заявку</button>
                </div>
            )}
        </div>
    );
};

export default Header;

