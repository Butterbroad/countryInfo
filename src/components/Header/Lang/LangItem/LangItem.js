import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentLang } from '../../../../Store/actions/lang'
import { IntlActions } from 'react-redux-multilingual'

function LangItem({ item }) {

  const dispatch = useDispatch();
  return (
    <li
      className="lang__dropdown-item"
      onClick={() => {
        dispatch(setCurrentLang(item));
        dispatch(IntlActions.setLocale(item.locale))
      }}>
      {item.name}
    </li>
  )
}

export default LangItem
