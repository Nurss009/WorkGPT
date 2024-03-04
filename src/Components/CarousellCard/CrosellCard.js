import React, {useEffect, useState} from 'react';
import './styleCard.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaruselSection = () => {

    const [slidesToShow, setSlidesToShow] = useState(window.innerWidth <= 700 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth <= 700 ? 1 : 2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
    };

    const data = [
        {
            title: 'Человеческого фактора',
            info: 'Сотрудники работают менее эффективно, чем предполагает бизнес-модель (болеют, уходят в отпуска,совершают ошибки связанные с человеческим фактором), не справляются с большими нагрузками (общение с несколькими клиентами/учениками/сотрудниками одновременно). Издержки на ФОТ (фонд оплаты труда) в разы выше, чем прибыль, которую приносит команда проекта.'
    },
        {
            title: ' Адаптации сотрудников',
            info:'У вас сложный продукт, нет чётких регламентов и обучающих программ. Каждый сотрудник долго вводится в должность и не сразу начинает выполнять поставленные задачи,что ведёт к издержкам на оплату труда.'
        },
        {
            title:'  Процедуры найма новых сотрудников',
            info:'Штат постоянно увеличивается. Сталкиваетесь со сложностью поиска качественных специалистов среди многообразия рынка труда. Приходится обращаться к рекрутерам или отдельным агентствам, тратя на это немалые средства.',
        }

    ]
    return (
        <div className={'container'}>
            <h4 className={'h44'}> Если вы регулярно теряете прибыль из-за...</h4>
            <Slider {...settings}>
                {data.map ((d) => (
                    <div className={'Card-Title'}>
                        <h5 className={'title-h5'}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="8.75684" cy="8.75684" r="8.75684" fill="#6F4CFF"/></svg> {d.title}</h5>
                        <p className={'Card-p'}>{d.info}</p>
                    </div>
                )) }
            </Slider>
        </div>
    );
};

export default CaruselSection;