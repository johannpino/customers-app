import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCustomers} from '../redux/actions/fetchCustomers'

const customers = [
    {
        "dni": "1",
        "name": "Johann",
        "age": 27
    },
    {
        "dni": "2",
        "name": "Johann",
        "age": 27
    },
    {
        "dni": "3",
        "name": "Johann",
        "age": 27
    }
]



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
                    body={this.renderBody(customers)} 
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.protoType = {
    fetchCustomers: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => (
  {
      fetchCustomers: () => dispatch(fetchCustomers())
  }  
)

export default withRouter(connect(null,mapDispatchToProps)(CustomersContainer));