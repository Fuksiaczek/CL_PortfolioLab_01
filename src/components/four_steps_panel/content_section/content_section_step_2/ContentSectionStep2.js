import React, {Component} from 'react';
import $ from 'jquery';
import './_content_section_step_2.scss';

class ContentSectionStep2 extends Component
{
    state =
        {
            checked: "",
            disabled: true,
        };

    componentDidMount()
    {
        $(function () {

            const $dropdownBtn = document.querySelector(".content-main-step2-dropdown-btn");
            const $dropdownList = document.querySelector(".content-main-step2-dropdown-list");
            const $dropdownLiList = $dropdownList.querySelectorAll("li");
            const $dropdownSpan = document.querySelector(".content-main-step2-dropdown-span");

            $dropdownBtn.addEventListener("click", function (e) {
                e.preventDefault();
                $dropdownList.classList.toggle("visible-dropdown-list");
                $dropdownBtn.classList.toggle("rotate-btn");
            });

            for (let i = 0; i < $dropdownLiList.length; i++) {
                $dropdownLiList[i].addEventListener("click", function (e) {
                    $dropdownSpan.innerText = this.querySelector("span").innerText;
                });
            }
        });
    }

    handleChange = (e) =>
    {
        this.setState({
            checked: e.currentTarget.value,
            disabled: true,
        });

        if(e.currentTarget.value.length === 1)
        {
            this.setState({
                disabled: false,
            });
        }
        else
        {
            this.setState({
                disabled: true,
            });
        }
    };

    render() {
        const {checked, disabled} = this.state;
        return (
            <>
                <section className="section-four-steps-content">
                    <div className="container">
                        <div className="content">
                            <div className="content-main">
                                <div className="content-main-step-info">
                                    <h3>Krok {this.props.currentStep}/4</h3>
                                </div>
                                <div className="content-main-header">
                                    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                                </div>
                                <form className="content-main-step2">

                                    <div className="content-main-step2-dropdown">
                                        <span className="content-main-step2-dropdown-span"
                                        onChange={this.handleChange}>— wybierz —</span>
                                        <button className="content-main-step2-dropdown-btn"/>
                                        <ul className="content-main-step2-dropdown-list">
                                            <li>
                                                <input type="radio"
                                                       name="bag-count"
                                                       value="1"
                                                       id="bag-count-1"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="bag-count-1">
                                                    <span>1</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio"
                                                       name="bag-count"
                                                       value="2"
                                                       id="bag-count-2"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="bag-count-2">
                                                    <span>2</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio"
                                                       name="bag-count"
                                                       value="3"
                                                       id="bag-count-3"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="bag-count-3">
                                                    <span>3</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio"
                                                       name="bag-count"
                                                       value="4"
                                                       id="bag-count-4"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="bag-count-4">
                                                    <span>4</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio"
                                                       name="bag-count"
                                                       value="5"
                                                       id="bag-count-5"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="bag-count-5">
                                                    <span>5</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                </form>
                            </div>
                            <div className="content-btns">
                                <button onClick={this.props.goBack}>
                                    Wstecz
                                </button>
                                <button onClick={()=>this.props.stepUpdate({checked})}
                                        disabled={disabled}>
                                    Dalej
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ContentSectionStep2;