import React from 'react';
import style from './Resources.module.css';
import brochure from '../../img/brochure.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
export default function Resources() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className={style.head}>03 RESOURCES</div>
            <div className={style.headTitle}>RESOURCES</div>
            <div className="broucre mt-5 pt-5">
                <div className={style.resource}>
                    <div className="brouchure">
                        <img className={style.image} src={brochure} alt="" />
                        <span className={style.para}>Brochure</span>
                    </div>
                    <button className={style.btn}> <FontAwesomeIcon className={style.right} icon={faChevronLeft}/>View</button>
                </div>
            </div>
        </section>
    )
}
