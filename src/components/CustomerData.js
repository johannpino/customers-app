import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({name,dni,age,onBack}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del clientes</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>dni</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
        <CustomersActions>
            <button onClick={onBack}>Volver Atras</button>
        </CustomersActions>
        </div>
        
    );
};

CustomerData.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
    onBack:PropTypes.func,
};

export default CustomerData;