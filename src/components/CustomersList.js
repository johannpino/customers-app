import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem'

const CustomersList = ({customers, urlPath}) => {
    return (
        <div>
            {
                customers.map((c,i) => {
                    return(
                        <CustomersListItem 
                        key={c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}                   
                    />
                    )
                })
            }
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;