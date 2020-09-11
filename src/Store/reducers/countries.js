import {
  GET_COUNTRIES_BY_LONGNAME,
  GET_COUNTRIES_BY_SHORTNAME,
  GET_COUNTRIES_BY_CODE,
  GET_COUNTRIES_BY_CURRENCY
} from '../constants/countries'

const initialState = {
  countries: null
}

export const countries = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_BY_LONGNAME:
      return {
        ...state,
        countries: action.payload
      }
    case GET_COUNTRIES_BY_SHORTNAME:
      return {
        ...state,
        countries: action.payload
      }
    case GET_COUNTRIES_BY_CODE:
      return {
        ...state,
        countries: action.payload
      }
    case GET_COUNTRIES_BY_CURRENCY:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return state
  }
}