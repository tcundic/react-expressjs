import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, errors, setValue, getValues, formState } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const { isDirty, isValid } = formState;

    const onSubmit = data => {
        console.log('S U B M I T', data);
    };

    return (
        <div className="container">
            <h1>Contact us</h1>
            <div className="card app-card">
                <form className="app-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* E-MAIL */}
                    <div className="app-form-group">
                        <label className="app-label" htmlFor="email">E-Mail</label>
                        <input
                            type="text"
                            className="form-control app-text-input"
                            id="email"
                            name="email"
                            placeholder="Enter e-mail"
                            ref={register({
                                required: getValues("validation"),
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }
                            })}
                            onChange={e => {
                                setValue(e.target.name, e.target.value, true);
                            }}
                        />
                        { errors.email?.type === "required" && <span className="app-form-error">E-mail is required</span>}
                        { errors.email?.type === "pattern" && <span className="app-form-error">Invalid e-mail</span>}
                    </div>

                    {/* MESSAGE */}
                    <div className="app-form-group">
                        <label className="app-label" htmlFor="message">Message</label>
                        <textarea
                            className="form-control app-text-input"
                            id="message"
                            name="message"
                            placeholder="Enter message"
                            ref={register({
                                required: getValues("validation"),
                                minLength: 30
                            })}
                            rows="6"
                            cols="50"
                            onChange={e => {
                                setValue(e.target.name, e.target.value, true);
                            }}
                        />
                        { errors.message?.type === "required" && <span className="app-form-error">Message is required</span>}
                        { errors.message?.type === "minLength" && <span className="app-form-error">Message must be longer than 30 characters</span>}
                    </div>

                    {/* CLIENT SIDE VALIDATION */}
                    <div className="app-form-group app-checkbox">
                        <input
                            type="checkbox"
                            className="form-control checkbox"
                            name="validation"
                            id="validation"
                            ref={register}
                        />
                        <label htmlFor="validation" className="user-form__label">Client Side Validation</label>
                    </div>

                    <div className="app-form__form-buttons">
                        <button 
                            disabled={ (!isDirty || !isValid) && getValues("validation") === true }
                            className={`app-btn ${(!isDirty || !isValid) && getValues("validation") === true ? "disabled" : ""}`}>
                            Submit
                        </button>
                    </div>

                    {getValues("validation") === true && formState.isSubmitSuccessful === true && <h2 className="app-form-success">We received your message and we'll reply to you shortly</h2>}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;