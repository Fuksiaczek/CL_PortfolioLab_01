import React, {Component} from 'react';
import './_about_us.scss';
import Decorator from "../../general/decorator/Decorator";


class AboutUs extends Component
{
    render() {
        return (
            <>
                <section className="section-about-us" id="scroll-about-us">
                    <div className="about-us">
                        <div className="about-us-info">
                            <h2>O nas</h2>
                            <Decorator/>
                            <h4>
                                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                            </h4>
                            <div className="about-us-info-img"/>
                        </div>
                        <div className="about-us-img"/>
                    </div>
                </section>
            </>
        )
    }
}

export default AboutUs;