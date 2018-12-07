import React, { Component } from 'react';
import CustomerEdit from '../components/CustomerEdit';
import AppFrame from '../components/AppFrame'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {insertCustomer} from '../redux/actions/insertCustomer'

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        this.props.insertCustomer(values)
    }

    handleOnSubmitSuccess = () => {
        this.onBack()
    }

    onBack = () => {
        this.props.history.goBack()
    }

    renderBody = () => {
        return <CustomerEdit 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}
                />
    }

    render() {
        return (
            <div>
                <AppFrame header={`Creacion de nuevo cliente`}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}


export default withRouter(connect(null,{ insertCustomer })(NewCustomerContainer));