import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate' ;
import RenderField from './renderField';
import FieldModel from './fieldModel';



export const RegistrationPage1 = props => {
 const handleSubmit = props.handleSubmit;
//will be pushed in order of render
    let fields = [];
    // fields.push(new FieldModel('firstName', 'text', renderField, 'First Name'));
    fields.push(new FieldModel('firstName', 'text',        RenderField, 'First Name'));
    fields.push(new FieldModel('lastName', 'text',         RenderField, 'Last Name'));
    fields.push(new FieldModel('address1', 'text',         RenderField, 'Address 1'));
    fields.push(new FieldModel('address2', 'text',         RenderField,  'Address 2'));
    fields.push(new FieldModel('city', 'text',             RenderField,  'City'));
    fields.push(new FieldModel('stateOrProvince', 'text',  RenderField, 'State/Province'));
    fields.push(new FieldModel('zipOrPostalCode', 'text',  RenderField, 'Zip/Postal Code'));



    // let renderFields = [];

    // fields.forEach(f => renderFields.push(<Field  name={f.name} type={f.type} component={f.component} label={f.label}/>));

    // const rs = fields.map( (f, index) => <Field key={'mykey' + index} name={f.name} type={f.type} component={f.component} label={f.label}/>);
    fields = fields.map( (f,index) =>
        <Field
            key={"mykey" + index.toString()}
            name={f.name}
            type={f.type}
            component={f.component}
            label={f.label}
        /> );

    // const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            {fields}


            <div>
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
})(RegistrationPage1);
