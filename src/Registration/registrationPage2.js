import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate' ;
import renderField from './renderField';
import FieldModel from './fieldModel';



export const RegistrationPage2 = props => {


const {handleSubmit, previousPage} = props;
//will be pushed in order of render
    let fields = [];
    // fields.push(new FieldModel('firstName', 'text', renderField, 'First Name'));
    fields.push(new FieldModel('testtt', 'text',  'testtttt'));

    fields = fields.map( (f,index) =>
        <Field
            key={"mykey2" + index.toString()}
            name={f.name}
            type={f.type}
            component={renderField}
            label={f.label}
        /> );

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
