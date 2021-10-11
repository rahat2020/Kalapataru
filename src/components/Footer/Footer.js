import React, { useState } from 'react'
import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [show, setShow] = useState(true)
    console.log(show)

    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className="footerHead">
                <hr className={style.lineOne} />
                <div className={style.details}>
                    {
                        show ?
                            <div className={style.footer}>
                                <p className={style.para}>RERA DETAILS</p>
                                <button className={style.btn} onClick={() => setShow((data) => !data)}>
                                    {
                                        show ? <FontAwesomeIcon className={style.plus} icon={faPlus} /> : <FontAwesomeIcon className={style.plus} icon={faMinus} />
                                    }
                                </button>

                            </div>

                            :
                            <div className={style.footer}>
                                <p className={style.para}>RERA DETAILS</p>
                                <div className={style.hideData}>
                                    <span className={style.data}>Kalpataru Avante bearing TS RERA no. P02500002612 available at http://rerait.telangana.gov.in/</span>
                                </div>
                                <button className={style.btn} onClick={() => setShow((data) => !data)}>
                                    {
                                        show ? <FontAwesomeIcon className={style.plus} icon={faPlus} /> : <FontAwesomeIcon className={style.plus} icon={faMinus} />
                                    }
                                </button>

                            </div>
                    }
                </div>
                <hr className={style.line} />
            </div>

            <div className="mt-5 pt-5">
                <div className="row">
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/"> <li className={style.list}>COMPANY PROFILE</li></Link>
                            <Link to="/"> <li className={style.list}>LEADERSHIP TEAM</li></Link>
                            <Link to="/"> <li className={style.list}>50+ YEARS OF OUR LEGACY</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/"> <li className={style.list}>RESIDENTIAL PROJECTS</li></Link>
                            <Link to="/"> <li className={style.list}>COMMERCIAL PROJECTS</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/"> <li className={style.list}>GROUP COMPANIES</li></Link>
                            <Link to="/"> <li className={style.list}>CSR</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/"> <li className={style.list}>OUR OFFICES</li></Link>
                            <Link to="/"> <li className={style.list}>CAREERS</li></Link>
                            <Link to="/"> <li className={style.list}>VENDOR CONNECT</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/"> <li className={style.list}>AWARDS</li></Link>
                            <Link to="/"> <li className={style.list}>RERA</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-2 justify-content-start">
                        <ul>
                            <Link to="/enquire"><li className={style.enquire}>ENQUIRE NOW</li></Link>
                            <Link to="/enquire"><li className={style.list}>+91 22 3064 3065</li></Link>
                            <Link to="/enquire"><li className={style.list}>SALES@KALPATARU.COM</li></Link>
                            <p>FOLLOW</p>
                            <Link target="_blank" to="https://www.youtube.com/c/KalpatarulimitedOfficial"><FontAwesomeIcon className={style.social} icon={faYoutube} /></Link>
                            <Link target="_blank" to="https://www.linkedin.com/company/kalpataru-limited/"><FontAwesomeIcon className={style.socialLink} icon={faLinkedin} /></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
