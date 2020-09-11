import { combineReducers } from 'redux';
import { dropdown } from './dropdown';
import { countries } from './countries';
import { lang } from './lang';
import { loader } from './loader';
import { IntlReducer as Intl } from 'react-redux-multilingual';


const allReducers = combineReducers({
  dropdown, countries, lang, loader, Intl
});

export default allReducers;