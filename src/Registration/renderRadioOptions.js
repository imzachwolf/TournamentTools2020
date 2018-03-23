import React from 'react';
import {Field} from "redux-form";

// Uses options that is list of Field models with name and value that is used
// Uses label from props for top label of option selection

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;

export const RenderRadioOptions = (props) => (
    <div>
        {/*{props.name}*/}
        <label>{props.label}</label>
        <div>
            {props.options.map(opt => (
                <label  key={opt.value}>
                <Field name={opt.name} component='input' type='radio' value={opt.value}/>
                {' '}
                {opt.valueLabel}
                </label>
            ))}
            <Field name={props.options[0].name} component={renderError}/>
        </div>

    </div>

);

export default RenderRadioOptions;