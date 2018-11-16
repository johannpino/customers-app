import {handleActions} from 'redux-actions'
import {FETCH_CUSTOMERS} from '../actions/fetchCustomers'

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state,action) => [...action.payload]
}, [])