import React, {Component} from 'react';
import './_content_section.scss';


class ContentSectionStep2 extends Component
{
    state =
        {
            checked: "",
            disabled: true,
        };

    handleChange = (e) =>
    {
        this.setState({
            checked: e.currentTarget.value,
            disabled: false,
        });
        if(e.currentTarget.value)
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
                                    <label>
                                        <h3>
                                            Liczba 60l worków:
                                        </h3>
                                        <i className="fas fa-2x fa-chevron-down"/>
                                        <select onChange={this.handleChange}>
                                            <option value="">— wybierz —</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </label>
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