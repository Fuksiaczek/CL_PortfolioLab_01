import React, {Component} from 'react';
import './_content_section.scss';




class ContentSectionStep1 extends Component
{
    state =
        {
          checked: "",
        };

    handleChange = (e) =>
    {
        this.setState({
            checked: e.currentTarget.value,
        })
    };


    render() {
        return (
            <>
                <section className="section-four-steps-content">
                    <div className="container">
                        <div className="content">
                            <div className="content-main">
                                <div className="content-main-step-info">
                                    <h3>Krok 1/4</h3>
                                </div>
                                <div className="content-main-header">
                                    <h2>Zaznacz co chcesz oddać</h2>
                                </div>
                                <form >
                                    <input type="radio"
                                           name="option"
                                           value="ubrania, które nadają się do ponownego użycia"
                                           id="option-1"
                                           onChange={this.handleChange}/>
                                    <label htmlFor="option-1">
                                        <span/>
                                        <h3>
                                            ubrania, które nadają się do ponownego użycia
                                        </h3>
                                    </label>
                                    <input type="radio"
                                           name="option"
                                           value="ubrania, do wyrzucenia"
                                           id="option-2"
                                           onChange={this.handleChange}/>
                                    <label htmlFor="option-2">
                                        <span/>
                                        <h3>
                                            ubrania, do wyrzucenia
                                        </h3>
                                    </label>
                                    <input type="radio"
                                           name="option"
                                           value="zabawki"
                                           id="option-3"
                                           onChange={this.handleChange}/>
                                    <label htmlFor="option-3">
                                        <span/>
                                        <h3>
                                            zabawki
                                        </h3>
                                    </label>
                                    <input type="radio"
                                           name="option"
                                           value="książki"
                                           id="option-4"
                                           onChange={this.handleChange}/>
                                    <label htmlFor="option-4">
                                        <span/>
                                        <h3>
                                            książki
                                        </h3>
                                    </label>
                                    <input type="radio"
                                           name="option"
                                           value="inne"
                                           id="option-5"
                                           onChange={this.handleChange}/>
                                    <label htmlFor="option-5">
                                        <span/>
                                        <h3>
                                            inne
                                        </h3>
                                    </label>
                                </form>
                            </div>
                            <button onClick={()=>this.props.step1Update(this.state.chacked)}>
                                Dalej
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ContentSectionStep1;