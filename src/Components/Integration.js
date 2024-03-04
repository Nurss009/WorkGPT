import React from 'react';
import Ten from "./Assets/0.png";
import foto from "./Assets/Foto.png";

const Integration = () => {
    return (
        <div>
            <div className="container">
                <div className="row top-section">
                    <div className="col-md-12 col-6">
                        <div className="text">
                            <h2 className={'h2-top'}>
                                Интеграция ИИ в бизнес-
                                процессы вашей компании
                            </h2>
                            <p className={'p-top'}>
                                Увеличим прибыль и сократим расходы с помощью
                                внедрения ИИ-решений, автоматизирующих
                                и оптимизирующих задачи ваших сотрудников
                            </p>
                            <img className={'ten'} src={Ten} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-12 col-5 ">
                        <img className={'foto'} src={foto} alt=""/>
                        <img className={'ten-foto'} src={Ten} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integration;