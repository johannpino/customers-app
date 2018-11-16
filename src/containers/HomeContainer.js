import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('click')
        this.props.history.push('/customers')
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            Esta es la pantalla incial
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>
                            </CustomersActions>
                        </div>
                        
                    }
                >
                </AppFrame>
            </div>
        );
    }
}

// HomeContainer.propTypes = {

// };

export default HomeContainer;