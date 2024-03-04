import React from 'react';
import ScrollableContent from './Scroll/ScrollSection';
import './Scroll/StyleScroll.css'

const MainComponent = () => {
    return (
        <div className="main-container">
            <div className="scroll">
                <h1 className="text-white text-center scrol-v ">Продукт <span className="text-span">сложный</span>, но его внедрение будет для вас <span className="text-span">простым</span>!</h1>
            </div>
            <div className="scrollable-container">
                <ScrollableContent />
            </div>
        </div>
    );
};

export default MainComponent;