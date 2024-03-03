import React from 'react';

const Application = () => {
    return (
        <div>
            <h3>Мы вам поможем!</h3>
            <p>Просто оставьте заявку и с вами свяжется наш менеджер:
                проконсультирует по всем вопросам, сделает расчёт затрат
                на внедрение нашего решения и прогнозируемую прибыль.
            </p>
            <div>
                <input type="text" placeholder={'Удобный способ связи'}/>
                <input type="text" placeholder={'Средняя прибыль компании в год'}/>
            </div>
        </div>
    );
};

export default Application;