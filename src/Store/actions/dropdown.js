import { SET_CURRENT_ITEM } from '../constants/dropdown'

export const setCurrentItem = (item) => ({
  type: SET_CURRENT_ITEM,
  payload: item
})