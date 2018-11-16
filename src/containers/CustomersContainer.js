import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCustomers} from '../redux/actions/fetchCustomers'
import {getCustomers} from '../redux/selectors/customers'


class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers()
    }
     

    handleAddNew = () => {
        console.log('click click')
        this.props.history.push('/customers/new')
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'} 
            ></CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew} >
                    Nuevo Cliente
                </button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'} 
                    body={this.renderBody(this.props.customers)} 
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.protoType = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
}

CustomersContainer.defaultProps = {
    customers: [ ]
}


const mapStateToProps = (state) => ({
    customers: getCustomers(state)
})


export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));