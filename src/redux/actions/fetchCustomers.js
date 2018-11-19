
import {createAction} from 'redux-actions'
import { apiGet } from '../../api';
import { urlCustomers } from '../../api/urls';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'



export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers) )