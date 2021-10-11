import React from 'react'
import style from './Gallery.module.css';
import imageFour from '../../img/imageFour.jpg';
import imageOne from '../../img/imageOne.jpg';
import imageTwo from '../../img/imageTwo.jpg';
import imageThree from '../../img/imageThree.jpg';

export default function Gallery() {
    return (
        <section className="container mt-5 pt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <div className={style.gallery}>
                        <img className="shadow" id={style.image} src={imageFour} alt="" />
                        <span className={style.para}>Amenities at three different levels.</span>
                        <div class={style.middle}>
                            <button class={style.text}>View more</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={style.gallery}>
                        <img className="shadow" id={style.image} src={imageThree} alt="" />
                        <span className={style.para}>Creche with kids’ play area.</span>
                        <div class={style.middle}>
                            <button class={style.text}>View more</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={style.gallery}>
                        <img className="shadow" id={style.image} src={imageOne} alt="" />
                        <span className={style.para}>Spacious multi-purpose hall for celebrations.</span>
                        <div class={style.middle}>
                            <button class={style.text}>View more</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={style.gallery}>
                        <img className="shadow" id={style.image} src={imageTwo} alt="" />
                        <span className={style.para}>Vastu Compliant homes with Puja Niche*</span>
                        <div class={style.middle}>
                            <button class={style.text}>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
