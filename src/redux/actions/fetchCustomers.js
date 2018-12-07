
import {createAction} from 'redux-actions'
import { apiGet } from '../../api';
import { urlCustomers } from '../../api/urls';
import { FETCH_CUSTOMERS } from '../constants';






export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers) )