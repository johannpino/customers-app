import React, { Component } from 'react';
import {connect} from 'react-redux'
import AppFrame from '../components/AppFrame'
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../redux/selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'
import {fetchCustomers} from '../redux/actions/fetchCustomers'
import {updateCustomer} from '../redux/actions/updateCustomer'
import {deleteCustomer} from '../redux/actions/deleteCustomer'


class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers()
        }
    }
    
    handleSubmit = values => {
        console.log(JSON.stringify(values))
        const {id} = values
        return this.props.updateCustomer(id,values)
    }
    
    handleOnBack = () => {
        this.props.history.goBack()
    }

    handleOnSubmitSuccess = () => {
        this.handleOnBack()
    }

    handleOnDelete = (id) => {
        console.log(id);
        this.props.deleteCustomer(id).then(v => this.handleOnBack())
        
    }

    renderCustomerControl = (idEdit, isDelete) => {
        if(this.props.customer){
            const CustomerControl = idEdit ? CustomerEdit : CustomerData
            return (
                <CustomerControl {...this.props.customer} 
                onSubmit={this.handleSubmit} 
                onSubmitSuccess={this.handleOnSubmitSuccess} 
                onBack={this.handleOnBack}
                isDeleteAllow={!!isDelete}
                onDelete={this.handleOnDelete}    
            />
            )
        }                
        return null
    } 
    
    renderBody = () => (
        <Route path='/customers/:dni/edit' children={
            ({match: isEdit}) => (
                <Route 
                    path='/customers/:dni/del' 
                    children={
                        ({match: isDelete}) => this.renderCustomerControl(isEdit,isDelete)                        
                    } 
                />
            )
                
        } />
    )


    render() {
        return (
            <div>
               <AppFrame header={`Clientes ${this.props.dni}`}
                body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state,props) => ({
    customer: getCustomerByDni(state,props)
})

export default connect(mapStateToProps,{ fetchCustomers,updateCustomer, deleteCustomer })(CustomerContainer);