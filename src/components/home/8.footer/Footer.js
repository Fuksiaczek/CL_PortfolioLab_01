import React, {Component} from 'react';
import "./_footer.scss";

class Footer extends Component
{


    render() {
        return (
            <>
                <section className="footer">
                    <div className="footer-content">
                        <p>Copywright by Coders Lab &copy;</p>
                        <div className="footer-content-img">
                            <div className="footer-content-img-facebook"/>
                            <div className="footer-content-img-instagram"/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Footer;