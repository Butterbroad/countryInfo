import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader'

const initialState = {
  loading: false
}

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        loading: true
      }
    case HIDE_LOADER:
      return {
        loading: false
      }
    default:
      return state
  }
}