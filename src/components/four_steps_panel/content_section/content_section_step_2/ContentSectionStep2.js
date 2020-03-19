import React, {Component} from 'react';
import $ from 'jquery';
import './_content_section_step_2.scss';

class ContentSectionStep2 extends Component
{
    state =
        {
            checked: "",
            disabled: true,
            bags: [1, 2, 3, 4, 5]
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
        const {checked, disabled, bags} = this.state;
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
                                        <span className="content-main-step2-dropdown-span">
                                            — wybierz —
                                        </span>
                                        <button className="content-main-step2-dropdown-btn"/>
                                        <ul className="content-main-step2-dropdown-list">

                                            {bags.map((bag) => (
                                                <li key={`bag-count-${bag}`}>
                                                    <input type="radio"
                                                           name="bag-count"
                                                           value={bag}
                                                           id={`bag-count-${bag}`}
                                                           onChange={this.handleChange}/>
                                                    <label htmlFor={`bag-count-${bag}`}>
                                                    <span>
                                                        {bag}
                                                    </span>
                                                    </label>
                                                </li>
                                            ))}

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