import React from 'react';
import Slider from "react-slick";
import Seva from '../Assets/chel1.png'
import Anna from "../Assets/chel3.png"
import Ivan from "../Assets/chel2.png"
import Dania from "../Assets/chel4.png"
import './StyleImg.css'
import tenii from '../Assets/1.png'

const CaroselImage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
    };

    const data = [
        {
            img: Seva,
            name: 'Севак Петросян',
            job: 'Технический директор',
            company: 'РЖД, Тинькофф, ArtMasters, ATLAS agency, Точка ИМПРО',
            experience: '7 лет в маркетинге, Предприниматель, маркетолог'
        },
        {
            img: Ivan,
            name: 'Сайковский Иван',
            job: 'Генеральный директор',
            company: 'РЖД, Тинькофф, ArtMasters, ATLAS agency, Точка ИМПРО',
            experience: '7 лет в маркетинге, Предприниматель, маркетолог'
        },
        {
            img: Anna,
            name: 'Анна Кан',
            job: 'Директор по продажам',
            company: 'РЖД, Тинькофф, ArtMasters, ATLAS agency, Точка ИМПРО',
            experience: '7 лет в маркетинге, Предприниматель, маркетолог'
        },
        {
            img: Dania,
            name: 'Даниил Вихров',
            job: 'PR и связи с общественностью',
            company: 'РЖД, Тинькофф, ArtMasters, ATLAS agency, Точка ИМПРО',
            experience: '7 лет в маркетинге, Предприниматель, маркетолог'
        },
    ];

    return (
       <>
           {/*<img className={'teni-right'} src={teni_right} alt=""/>*/}
           <div className={'container'}>
               <div id={'Team'} className="h4-div">
                   <h1 className="text-white text-center scrol-v h4-team ">Мы собрали команду <span className="text-span">экспертов</span>,которую хотим с гордостью представить</h1>
               </div>
               <Slider {...settings}>
                   {data.map((d, index) => (
                       <div key={index} className={'Cardd'}>
                           <div className={'image-container'}>
                               <img className={'image'} src={d.img} alt=""/>
                               <div className="overlay">
                                   <div className="overlay-top">{d.job}</div>
                                   <div className="experience">{d.experience}</div>
                                   <div className="hover-text">{d.company}</div>
                               </div>
                           </div>
                           <div className="name-job">
                               <h5 className={'Name-Card'}>{d.name}</h5>
                           </div>
                       </div>
                   ))}

               </Slider>
           </div>
           <img className={'teni-carousel'} src={tenii} alt=""/>

       </>
    );
};

export default CaroselImage;
