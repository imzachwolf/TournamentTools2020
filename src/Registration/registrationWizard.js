import React, {Component} from 'react';
import {Header} from '../header';
import RegistrationPage1 from './registrationPage1';
import {Provider} from "react-redux";
import store from "./store"
import RegistrationPage2 from "./registrationPage2";

class registrationWizard extends Component{

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }


    render () {
        const {onSubmit} = this.props;
        const {page} = this.state;
        return (
        <Provider store={store}>
            <div className="registration container body-content">

                {/*<Header />*/}
                {page === 1 && <RegistrationPage1 onSubmit={this.nextPage()}/>}
                {/*{page === 2 && <RegistrationPage2 previousPage={this.previousPage} onSubmit={this.nextPage}/>}*/}


            </div>
        </Provider>
        )
    }

}

// RegistrationWizard.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };

export default  registrationWizard;
