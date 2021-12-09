import { COUNTRIES } from '../shared/countries';
import { AIRPORTS } from '../shared/airports';

//we will no longer use this file because we are separated the reducer to other files...
const initialState = {
    countries: COUNTRIES,
    airports: AIRPORTS
};

const Reducer  = (state = initialState, action) => {
    return state
}