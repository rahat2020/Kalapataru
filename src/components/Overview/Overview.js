import React from 'react'
import style from './Overview.module.css';
import overviewpic from '../../img/overviewpic.jpg';
export default function Overview() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className={style.Right}>
                <span className={style.header}>OVERVIEW</span>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className={style.head}>01  OVERVIEW</div>
                    <div className={style.overview}>
                        <img className="shadow" id={style.image} src={overviewpic} alt="" />
                        <div class={style.middle}>
                            <button class={style.text}>View more</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className={style.description}>
                        <h3 className={style.title}>Kalpataru Avante</h3>
                        <p className={style.des}>After the success of its first completed project, Kalpataru brings yet another landmark to Sanath Nagar – Kalpataru Avante.
                            <br /><br />
                            Unique in shape, intelligent in design, Kalpataru Avante is a home your heart always wished for. Vastu compliant and adorned with a host of amenities spread across 3 different levels, it’s located in a bustling neighborhood that brings the city closer. With a plush clubhouse and a perfect spread of indoor and outdoor comforts, it’s a home that lets you indulge in every desire.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
