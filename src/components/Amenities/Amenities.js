import React from 'react';
import style from './Amenities.module.css';
import playareasvg from '../../img/playareasvg.svg';
import lounge from '../../img/lounge.svg';
import meditation from '../../img/meditation.svg';
import outdoor from '../../img/outdoor.svg';
import solar from '../../img/solar.svg';
import rainwater from '../../img/rainwater.svg';
import theatre from '../../img/theatre.svg';
import spa from '../../img/spa.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
export default function Amenities() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className={style.head}>02 AMENITIES</div>
            <div className={style.headTitle}>AMENITIES</div>
            <div className="row">
                <div className="col-md-3 mt-5 pt-5">
                    <div className={style.one}>
                        <img className={style.image} src={playareasvg} alt="" />
                        <p className={style.para}>Kids' Play Area</p>
                    </div>
                </div>
                <div className="col-md-3 mt-5 pt-5">
                    <div className={style.one}>
                        <img className={style.image} src={meditation} alt="" />
                        <p className={style.para}>Meditation Pavillion</p>
                    </div>
                </div>
                <div className="col-md-3 mt-5 pt-5">
                    <div className={style.one}>
                        <img className={style.image} src={theatre} alt="" />
                        <p className={style.para}>Mini theatre</p>
                    </div>
                </div>
                <div className="col-md-3 mt-5 pt-5">
                    <div className={style.one}>
                        <img className={style.image} src={outdoor} alt="" />
                        <p className={style.para}>Outdoor Seating Area</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3 pt-2">
                    <div className={style.one}>
                        <img className={style.image} src={rainwater} alt="" />
                        <p className={style.para}>Rainwater Harvesting System</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3 pt-2">
                    <div className={style.one}>
                        <img className={style.image} src={lounge} alt="" />
                        <p className={style.para}>Recreational Lounge</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3 pt-2">
                    <div className={style.one}>
                        <img className={style.image} src={solar} alt="" />
                        <p className={style.para}>Solar Energy System</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3 pt-2">
                    <div className={style.one}>
                        <img className={style.image} src={spa} alt="" />
                        <p className={style.para}>Spa</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4" id={style.viewButton}>
                <button className={style.btn}> <FontAwesomeIcon className={style.right} icon={faChevronLeft}/>SHOW ALL AMENITIES</button>
            </div>
        </section>
    )
}
