import React from 'react';
import style from './Features.module.css';
import status from '../../img/status.png';
import location from '../../img/location.png';
import possesion from '../../img/possesion.png';
import price from '../../img/price.png';
import typology from '../../img/typology.png';

export default function Features() {
    return (
        <section className="container mt-4 pt-4 mb-5">
            <div className="row justify-content-between">
                <div className="col-md-2">
                    <div className={style.one}>
                        <div className={style.status}>
                            <img className={style.featuresImg} src={status} alt="" />
                        </div>
                        <p className={style.para}>Status: Launching soon</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={style.one}>
                        <div className={style.status}>
                            <img className={style.featuresImg} src={location} alt="" />
                        </div>
                        <p className={style.para}>Location: Sanath Nagar, Hyderabad</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={style.one}>
                        <div className={style.status}>
                            <img className={style.featuresImg} src={price} alt="" />
                        </div>
                        <p className={style.para}>Price: 2 BHK – 1.05 Cr.3 BHK – 1.24 Cr.(All Incl.) onw.</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={style.one}>
                        <div className={style.status}>
                            <img className={style.featuresImg} src={possesion} alt="" />
                        </div>
                        <p className={style.para}>Possession: Launching soon</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={style.one}>
                        <div className={style.status}>
                            <img className={style.featuresImg} src={typology} alt="" />
                        </div>
                        <p className={style.para}> Typology: 2 BHK, 3 BHK</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
