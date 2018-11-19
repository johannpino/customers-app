import React, { Component } from 'react';
import {connect} from 'react-redux'
import AppFrame from '../components/AppFrame'
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../redux/selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'

class CustomerContainer extends Component {
    
    renderBody = () => (
        <Route path='/customers/:dni/edit' children={
            ({match}) => {
                const CustomerControl = match ? CustomerEdit : CustomerData
                return <CustomerControl {...this.props.customer} />
            }
                
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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state,props) => ({
    customer: getCustomerByDni(state,props)
})

export default connect(mapStateToProps,null)(CustomerContainer);