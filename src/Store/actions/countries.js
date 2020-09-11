import {
  GET_COUNTRIES_BY_LONGNAME,
  GET_COUNTRIES_BY_SHORTNAME,
  GET_COUNTRIES_BY_CODE,
  GET_COUNTRIES_BY_CURRENCY
} from '../constants/countries';
import axios from 'axios';
import { showLoader, hideLoader } from '../actions/loader';

const getCountriesByLongname = (countries) => ({
  type: GET_COUNTRIES_BY_LONGNAME,
  payload: countries
})

export const getCountriesByLongnameAsync = (name) => {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
      dispatch(getCountriesByLongname(data))
      dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      dispatch(hideLoader())
    }
  }
}

const getCountriesByShortname = (countries) => ({
  type: GET_COUNTRIES_BY_SHORTNAME,
  payload: countries
})

export const getCountriesByShortnameAsync = (name) => {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
      dispatch(getCountriesByShortname(data))
      dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      dispatch(hideLoader())
    }
  }
}

const getCountriesByCode = (countries) => ({
  type: GET_COUNTRIES_BY_CODE,
  payload: countries
})

export const getCountriesByCodeAsync = (code) => {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
      dispatch(getCountriesByCode(data))
      dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      dispatch(hideLoader())
    }
  }
}

const getCountriesByCurrency = (countries) => ({
  type: GET_COUNTRIES_BY_CURRENCY,
  payload: countries
})

export const getCountriesByCurrencyAsync = (currency) => {
  return async dispatch => {
    try {
      dispatch(showLoader())
      const { data } = await axios.get(`https://restcountries.eu/rest/v2/currency/${currency}`);
      dispatch(getCountriesByCurrency(data))
      dispatch(hideLoader())
    } catch (err) {
      alert(err.message)
      dispatch(hideLoader())
    }
  }
}