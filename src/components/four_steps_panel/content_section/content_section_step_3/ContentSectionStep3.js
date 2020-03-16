import React, {Component} from 'react';
import './_content_section.scss';


class ContentSectionStep3 extends Component
{
    state =
        {
            checked: {
                localization: "",
                localizationSpecific: "",
                helpGroups: [],
            },
            checkboxDisabled: true,
            disabled: true,
        };

    handleChangeLocalization = (e) =>
    {
        if(e.currentTarget.value)
        {
            this.setState({
                checkboxDisabled: false,
                disabled: false,
                checked: {
                    localization: e.currentTarget.value,
                    localizationSpecific: this.state.checked.localizationSpecific,
                    helpGroups: this.state.checked.helpGroups,
                }
            })
        }
        else
        {
            this.setState({
                disabled: true,
            });
        }
    };

    handleChangeHelpGroups = (e) =>
    {
        this.setState({
            checked: {
                helpGroups: [...this.state.checked.helpGroups, e.currentTarget.value],
                localization: this.state.checked.localization,
                localizationSpecific: this.state.checked.localizationSpecific,
            },
        });

    };

    handleChangeLocalizationSpecific = (e) =>
    {
        this.setState({

            checked: {
                localizationSpecific: e.currentTarget.value,
                helpGroups: this.state.checked.helpGroups,
                localization: this.state.checked.localization,
            },
        });
    };

    render() {
        const {checked, checkboxDisabled, disabled} = this.state;
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
                                    <h2>Lokalizacja:</h2>
                                </div>
                                <form className="content-main-step3">
                                    <i className="fas fa-2x fa-chevron-down"/>
                                    <select onChange={this.handleChangeLocalization}>
                                        <option value="">— wybierz —</option>
                                        <option value="Poznań">Poznań</option>
                                        <option value="Warszawa">Warszawa</option>
                                        <option value="Kraków">Kraków</option>
                                        <option value="Wrocław">Wrocław</option>
                                        <option value="Katowice">Katowice</option>
                                    </select>
                                    <h4>Komu chcesz pomóc?</h4>
                                    <div className="content-main-step3-checkboxes">
                                        <input type="checkbox"
                                               value="dzieciom"
                                               id="option-1"
                                               disabled={checkboxDisabled}
                                               onChange={this.handleChangeHelpGroups}/>
                                        <label htmlFor="option-1">
                                            <h3>
                                                dzieciom
                                            </h3>
                                        </label>
                                        <input type="checkbox"
                                               value="samotnym matkom"
                                               id="option-2"
                                               disabled={checkboxDisabled}
                                               onChange={this.handleChangeHelpGroups}/>
                                        <label htmlFor="option-2">
                                            <h3>
                                                samotnym matkom
                                            </h3>
                                        </label>
                                        <input type="checkbox"
                                               value="bezdomnym"
                                               id="option-3"
                                               disabled={checkboxDisabled}
                                               onChange={this.handleChangeHelpGroups}/>
                                        <label htmlFor="option-3">
                                            <h3>
                                                bezdomnym
                                            </h3>
                                        </label>
                                        <input type="checkbox"
                                               value="niepełnosprawnym"
                                               id="option-4"
                                               disabled={checkboxDisabled}
                                               onChange={this.handleChangeHelpGroups}/>
                                        <label htmlFor="option-4">
                                            <h3>
                                                niepełnosprawnym
                                            </h3>
                                        </label>
                                        <input type="checkbox"
                                               value="osobom starszym"
                                               id="option-5"
                                               disabled={checkboxDisabled}
                                               onChange={this.handleChangeHelpGroups}/>
                                        <label htmlFor="option-5">
                                            <h3>
                                                osobom starszym
                                            </h3>
                                        </label>
                                    </div>
                                    <label className="content-main-step3-optional">
                                        <h4>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
                                        <textarea name="localization"
                                                  value={this.state.checked.localizationSpecific}
                                                  onChange={this.handleChangeLocalizationSpecific}/>
                                    </label>
                                </form>
                            </div>
                            <div className="content-btns">
                                <button >
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

export default ContentSectionStep3;