import React, {Component} from 'react';
import './_content_section_thanks.scss';
import Decorator from "../../../general/decorator/Decorator";
import $ from "jquery";


class ContentSectionThanks extends Component
{
    componentDidMount()
    {
        $(function ()
        {
            const $backgroundImg = document.querySelector(".section-four-steps-content");
            $backgroundImg.style.height = "100vh";
        });
    }

    render() {

        return (
            <>
                <section className="section-four-steps-content">
                    <div className="container">
                        <div className="content">
                            <div className="content-main-thanks">
                                <p>
                                    Dziękujemy za przesłanie formularza
                                    Na maila prześlemy wszelkie informacje o odbiorze.
                                </p>
                                <Decorator/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ContentSectionThanks;