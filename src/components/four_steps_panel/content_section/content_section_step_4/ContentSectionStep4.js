import React, {Component} from 'react';
import './_content_section_step_4.scss';


class ContentSectionStep3 extends Component
{
    state =
        {
            checked: {
                street: "",
                city: "",
                postcode: "",
                phone: "",
                date: "",
                time: "",
                info: "",
            },
            disabled: true,
            infoInvalid: false
        };

    validationChecked = () =>
    {
        const {street, city, postcode, phone, date, time} = this.state.checked;
        const {infoInvalid} = this.state;

        if(street && city && postcode && phone && date && time && !infoInvalid)
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

    handleChangeStreet = (e) =>
    {
        this.setState({
            checked:{
                street: e.currentTarget.value,
                city: this.state.checked.city,
                postcode: this.state.checked.postcode,
                phone: this.state.checked.phone,
                date: this.state.checked.date,
                time: this.state.checked.time,
                info: this.state.checked.info,
            },
        });
        this.validationChecked();
    };

    handleChangeCity = (e) =>
    {
        this.setState({
            checked:
                {
                    city: e.currentTarget.value,
                    street: this.state.checked.street,
                    postcode: this.state.checked.postcode,
                    phone: this.state.checked.phone,
                    date: this.state.checked.date,
                    time: this.state.checked.time,
                    info: this.state.checked.info,
                },
        });
        this.validationChecked();
    };

    handleChangePostcode = (e) =>
    {
        this.setState({
            checked:
                {
                    postcode: e.currentTarget.value,
                    street: this.state.checked.street,
                    city: this.state.checked.city,
                    phone: this.state.checked.phone,
                    date: this.state.checked.date,
                    time: this.state.checked.time,
                    info: this.state.checked.info,
                },
        });
        this.validationChecked();
    };

    handleChangePhone = (e) =>
    {
        this.setState({
            checked:
                {
                    phone: e.currentTarget.value,
                    street: this.state.checked.street,
                    postcode: this.state.checked.postcode,
                    city: this.state.checked.city,
                    date: this.state.checked.date,
                    time: this.state.checked.time,
                    info: this.state.checked.info,
                },
        });
        this.validationChecked();
    };

    handleChangeDate = (e) =>
    {
        this.setState({
            checked:
                {
                    date: e.currentTarget.value,
                    street: this.state.checked.street,
                    postcode: this.state.checked.postcode,
                    phone: this.state.checked.phone,
                    city: this.state.checked.city,
                    time: this.state.checked.time,
                    info: this.state.checked.info,
                },
        });
        this.validationChecked();
    };

    handleChangeTime = (e) =>
    {
        this.setState({
            checked:
                {
                    time: e.currentTarget.value,
                    street: this.state.checked.street,
                    postcode: this.state.checked.postcode,
                    phone: this.state.checked.phone,
                    date: this.state.checked.date,
                    city: this.state.checked.city,
                    info: this.state.checked.info,
                },
        });
        this.validationChecked();
    };

    handleChangeInfo = (e) =>
    {
        if(e.currentTarget.value.length > 100)
        {
            this.setState({
                infoInvalid: true,
            });
        }
        else
        {
            this.setState({
                checked:
                    {
                        info: e.currentTarget.value,
                        street: this.state.checked.street,
                        postcode: this.state.checked.postcode,
                        phone: this.state.checked.phone,
                        date: this.state.checked.date,
                        time: this.state.checked.time,
                        city: this.state.checked.city,
                    },
                infoInvalid: false,
            });
        }
        this.validationChecked();
    };


    render() {
        const {street, city, postcode, phone,
            date, time, info,
            checked, disabled, infoInvalid} = this.state;
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
                                    <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                                </div>
                                <div className="content-main-step4-forms">
                                    <form className="content-main-step4-forms-form">
                                        <legend><h3>Adres odbioru:</h3></legend>
                                        <label>
                                            <h3>Ulica*</h3>
                                            <input type="text"
                                                   name="street"
                                                   value={street}
                                                   onInput={this.handleChangeStreet}
                                                   onKeyUp={this.validationChecked}/>
                                        </label>
                                        <label>
                                            <h3>Miasto*</h3>
                                            <input type="text"
                                                   name="city"
                                                   value={city}
                                                   onInput={this.handleChangeCity}
                                                   onKeyUp={this.validationChecked}/>
                                        </label>
                                        <label>
                                            <h3>Kod pocztowy*</h3>
                                            <input type="text"
                                                   name="postcode"
                                                   value={postcode}
                                                   onChange={this.handleChangePostcode}
                                                   onKeyUp={this.validationChecked}/>
                                        </label>
                                        <label>
                                            <h3>Numer telefonu*</h3>
                                            <input type="text"
                                                   name="phone"
                                                   value={phone}
                                                   onChange={this.handleChangePhone}
                                                   onKeyUp={this.validationChecked}/>
                                        </label>
                                    </form>
                                    <form className="content-main-step4-forms-form">
                                        <legend><h3>Termin odbioru:</h3></legend>
                                        <label>
                                            <h3>Data*</h3>
                                            <input type="date"
                                                   name="date"
                                                   value={date}
                                                   onChange={this.handleChangeDate}/>
                                        </label>
                                        <label>
                                            <h3>Godzina*</h3>
                                            <input type="time"
                                                   name="time"
                                                   value={time}
                                                   onChange={this.handleChangeTime}/>
                                        </label>
                                        <label>
                                            <h3>Uwagi dla kuriera</h3>
                                            <textarea
                                                name="info"
                                                value={info}
                                                onChange={this.handleChangeInfo}
                                                onKeyUp={this.validationChecked}/>
                                        </label>
                                    </form>
                                </div>
                                <div className="content-main-step4-error">
                                    {infoInvalid && <h4>Wiadomość może mieć maksymalnie 100 znaków!</h4>}
                                </div>
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

export default ContentSectionStep3;