import React from 'react';
import './Style.css'
import gha from '../Assets/2.png'

const Application = () => {
    return (
        <>
            <div className={'container'}>
                <h3 className={'text-canter hh3'} >Мы вам поможем!</h3>
                <div className="pp">
                    <p className={'text-canter p'}>Просто оставьте заявку и с вами свяжется наш менеджер:
                        проконсультирует по всем вопросам, сделает расчёт затрат
                        на внедрение нашего решения и прогнозируемую прибыль.
                    </p>
                </div>
                <div id={'application'} className={'input'}>
                    <input className={'input-A'} type="text" placeholder={'Удобный способ связи'}/>
                    <input className={'input-A'} type="text" placeholder={'Средняя прибыль компании в год'}/>
                </div>
                <input className={'input-B'} type="text" placeholder={'Средняя прибыль компании в год '} />
                <button className={'Butt'}>Отправить <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1943 5.87027L6.98175 2.77712C3.54168 1.06426 1.82165 0.207829 1.0327 1.08494C0.245346 1.96205 1.09339 3.79381 2.79106 7.45733C3.14242 8.21554 3.31809 8.59292 3.31809 8.9996C3.31809 9.40627 3.14242 9.78538 2.79106 10.5419C1.09339 14.2054 0.245345 16.0389 1.03429 16.9143C1.82165 17.7931 3.54168 16.9349 6.98335 15.2221L13.1943 12.1289C15.9061 10.7779 17.2636 10.1024 17.2636 8.9996C17.2636 7.89675 15.9077 7.22125 13.1943 5.87027Z" fill="white"/>
                </svg>
                </button>
            </div>
        </>
    );
};

export default Application;