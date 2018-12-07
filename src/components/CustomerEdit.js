import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomersActions from './CustomersActions'
import {Prompt} from 'react-router-dom'


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

    return value && (!previusValues ? value : (value >= previusValues ? value : previusValues) )
}

const CustomerEdit = ({name,dni,age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
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
                    <button type="submit" disabled={pristine || submitting} >Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Se perderan los datos si continua"
                >

                </Prompt>
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