import { SET_CURRENT_LANG } from '../constants/lang'

const initialState = {
  currentLang: {
    name: 'RU',
    locale: 'ru',
  }
}

export const lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LANG:
      return {
        ...state,
        currentLang: action.payload
      }
    default:
      return state
  }
}