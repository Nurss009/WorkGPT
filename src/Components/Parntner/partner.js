import React from 'react';
import './StylePartner.css'
import Svg5 from '../Assets/Group.png'
import Svg1 from '../Assets/Group1.png'
import Svg2 from '../Assets/Group2.png'
import Svg3 from '../Assets/Group3.png'
import Svg4 from '../Assets/Group4.png'
import Svg6 from '../Assets/Group5.png'
import Svg7 from '../Assets/Group6.png'
import Svg8 from '../Assets/Group7.png'
import Svg9 from '../Assets/Group8.png'
import Svg10 from '../Assets/Group11.png'


const Partner = () => {
    return (
       < >
          <main>
              <section className={'PartnerSection'}>
                  <div className={'container'}>
                     <div className="Hiro">
                         <h1 className={'h1'}>Наши <span className={'text-span'}>партнёры</span></h1>
                         <div className={'part at'} >
                             <div className={'svg'}>
                                 <img className={'Image-par'} src={Svg1} alt=""/>
                                 <img className={'Image-par'} src={Svg2} alt=""/>
                                 <img className={'Image-par'} src={Svg3} alt=""/>
                                 <img className={'Image-par'} src={Svg4} alt=""/>
                                 <img className={'Image-par'} src={Svg5} alt=""/>
                             </div>
                         </div>
                         <div className={'part '} >
                             <img className={'Image-par'} src={Svg10} alt=""/>
                             <img className={'Image-par'} src={Svg6} alt=""/>
                             <img className={'Image-par'} src={Svg7} alt=""/>
                             <img className={'Image-par'} src={Svg8} alt=""/>
                             <img className={'Image-par'} src={Svg9} alt=""/>
                         </div>
                         <div className={'ten-partners'}>
                         </div>
                     </div>
                  </div>
              </section>
          </main>
       </>
    );
};

export default Partner;