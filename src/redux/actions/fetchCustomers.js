
import {createAction} from 'redux-actions'

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'

const customers = [
    {
        "dni": "1",
        "name": "Johann",
        "age": 27
    },
    {
        "dni": "2",
        "name": "Johann",
        "age": 27
    },
    {
        "dni": "3",
        "name": "Johann",
        "age": 27
    }
]


export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers )