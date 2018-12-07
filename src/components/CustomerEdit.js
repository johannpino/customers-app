import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomersActions from './CustomersActions'

// const isRequired = value => (
//     !value && "Este campo es requirido"
// )

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
)

const MyField = ({input, meta, type, label, name}) => (
    <div>
        
        <label htmlFor={name} >{label}</label>
        <input {...input} type={!type ? "text" : type }/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)

const validate = values => {
    const error = {}

    if(!values.name){
        error.name = "El campo nombre es requirido"
    }

    if(!values.dni){
        error.dni = "El campo Dni es un campo requirido"
    }

    return error
}

const toNumber = value => value && Number(value)

const onlyGrow = (value, previusValues, values) => {
    
    console.log(value)
    

    return value && previusValues && (value >= previusValues ? value : previusValues) 
}

const CustomerEdit = ({name,dni,age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    component={MyField} 
                    label="Nombre" 
                >
                </Field>
                <Field 
                    name="dni" 
                    component={MyField} 
                    validate={isNumber}
                    label="Dni"
                >
                </Field>
                <Field 
                    name="age" 
                    component={MyField}  
                    validate={isNumber}
                    type="number"
                    label="Edad"
                    parse={toNumber}
                    normalize={onlyGrow}
                ></Field>
                <CustomersActions>
                    <button type="submit" disabled={submitting} >Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
    onback: PropTypes.func,
};


const CustomerEditForm = reduxForm({form: 'CustomerEdit', validate})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)