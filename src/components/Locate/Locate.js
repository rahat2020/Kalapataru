import React from 'react';
import style from './Locate.module.css';
import map from '../../img/map.jpg';

export default function Locate() {
    return (
        <section className="container mt-5 pt-5 mb-5">
              <div className={style.head}>04 LOCATE</div>
            <div className={style.locate}>
                <img className="shadow-sm" id={style.image} src={map} alt="" />
                <div className={style.gotomap}>
                    <button className={style.gomap}>Click to view on Google Map</button>
                </div>
            </div>
        </section>
    )
}
