import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name,dni,age}) => {
    return (
        <div className="customer-data">
            <h2>Datos del clientes</h2>
            <div><strong>Nombre</strong><i>{name}</i></div>
            <div><strong>dni</strong><i>{dni}</i></div>
            <div><strong>Edad</strong><i>{age}</i></div>
        </div>
    );
};

CustomerData.propTypes = {
    name:PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
};

export default CustomerData;