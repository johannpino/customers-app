import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

CustomersActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomersActions;