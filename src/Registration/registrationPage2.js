import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate' ;
import RenderField from './renderField';
import FieldModel from './fieldModel';
import RenderRadioOptions from './renderRadioOptions';

const ranks = ["White", "Yellow", "Orange", "Green", "Blue", "Purple", "Brown", "Red", "Black"];

const RenderRanksSelctor = ({input, meta: {touched, error}}) => (
    <div>
        <select {...input}>
            <option value="">Select One</option>
            {ranks.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
);

let optionsForGenderSelector = [];
optionsForGenderSelector.push(new FieldModel('gender', 'radio', 'input', 'Gender', 'male', 'Male'));
optionsForGenderSelector.push(new FieldModel('gender', 'radio', 'input', 'Gender', 'female', 'Female'));


export const RegistrationPage2 = props => {


    const {handleSubmit, previousPage} = props;
//will be pushed in order of render
    let fields = [];
    // fields.push(new FieldModel('firstName', 'text', renderField, 'First Name'));
    fields.push(new FieldModel('testtt', 'text', RenderField, 'testtttt'));
    // fields.push(new FieldModel('genderSelector', 'radio', RenderRadioOptions( 'gender'  ,optionsForGenderSelector , 'Gender'), 'Gender', 'Male'));
    fields.push(new FieldModel('genderSelector', 'radio', RenderRadioOptions, 'Gender', 'male', 'Male', optionsForGenderSelector));
    fields.push(new FieldModel('rankSelector', 'select', RenderRanksSelctor, 'Rank/Level'));


    fields = fields.map((f, index) =>
        <Field
            key={"mykey2" + index.toString()}
            name={f.name}
            type={f.type}
            component={f.component}
            label={f.label}
            valueLabel={f.valueLabel}
            options={f.options}
        />);

    // const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            {fields}


            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    );

};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(RegistrationPage2);
