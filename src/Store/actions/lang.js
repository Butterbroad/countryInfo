import { SET_CURRENT_LANG } from '../constants/lang'

export const setCurrentLang = (item) => ({
  type: SET_CURRENT_LANG,
  payload: item
})