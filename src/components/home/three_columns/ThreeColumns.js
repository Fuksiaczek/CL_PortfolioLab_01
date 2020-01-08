import React, {Component} from 'react';
import './_three_columns.scss';


class ThreeColumns extends Component
{
    render() {
        return (
            <>
                <section className="section-three-columns">
                    <div className="container">
                        <div className="three-columns">
                            <div className="three-columns-col">
                                <h1>10</h1>
                                <h4>ODDANYCH WORKÓW</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                                </p>
                            </div>
                            <div className="three-columns-col">
                                <h1>5</h1>
                                <h4>WSPARTYCH ORGANIZACJI</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                                </p>
                            </div>
                            <div className="three-columns-col">
                                <h1>7</h1>
                                <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ThreeColumns;