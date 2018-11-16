import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

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

export default withRouter(CustomersContainer);