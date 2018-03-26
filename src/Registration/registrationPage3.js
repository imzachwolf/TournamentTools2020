import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate' ;
import RenderField from './renderField';
import FieldModel from './fieldModel';
import RenderRadioOptions from './renderRadioOptions';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

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



export const RegistrationPage3 = props => {


    const {handleSubmit, previousPage} = props;
//will be pushed in order of render
    let fields = [];
    fields.push(new FieldModel('schoolCity', 'text', RenderField, 'City' ));
    // fields.push(new FieldModel('firstName', 'text', renderField, 'First Name'));
    // fields.push(new FieldModel('testtt', 'text', RenderField, 'testtttt'));
    // fields.push(new FieldModel('genderSelector', 'radio', RenderRadioOptions( 'gender'  ,optionsForGenderSelector , 'Gender'), 'Gender', 'Male'));
    // fields.push(new FieldModel('genderSelector', 'radio', RenderRadioOptions, 'Gender', 'male', 'Male', optionsForGenderSelector));
    // fields.push(new FieldModel('rankSelector', 'select', RenderRanksSelctor, 'Rank/Level'));
    // fields.push(new FieldModel('height', 'number', RenderField, 'Height (inches)'));
    // fields.push(new FieldModel('weight', 'number', RenderField, 'Weight (lbs)'));


    fields.push(new FieldModel('schoolStateOrProvince', 'text', RenderField, 'State/Province'));
    fields.push(new FieldModel('schoolZipOrPostalCode', 'text', RenderField, 'Zip/Postal Code'));
    fields.push(new FieldModel('schoolName', 'text', RenderField, 'School Name'));
    fields.push(new FieldModel('instructorFirstName', 'text', RenderField, 'Instructor First Name'));
    fields.push(new FieldModel('instructorLastName', 'text', RenderField, 'Instructor Last Name'));
    fields.push(new FieldModel('instructorOrSchoolEmailAddress1', 'email', RenderField, 'Instructor/School Email Address'));
    fields.push(new FieldModel('instructorOrSchoolEmailAddress2', 'email', RenderField, 'Instructor/School Email Address'));

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
    //
    // fields.unshift(
    //     <div>
    //     {/*<CountryDropdown*/}
    //         {/*value={country}*/}
    //         {/*onChange={(val) => this.selectCountry(val)} />*/}
    //     {/*<RegionDropdown*/}
    //         {/*country={country}*/}
    //         {/*value={region}*/}
    //         {/*onChange={(val) => this.selectRegion(val)} />*/}
    //     </div>);

    // const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <h1>Division Info</h1>
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
})(RegistrationPage3);
