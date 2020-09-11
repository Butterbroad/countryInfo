import React, { useState, useEffect } from 'react'
import './Header.scss'
import Dropdown from './Dropdown/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCountriesByLongnameAsync,
  getCountriesByShortnameAsync,
  getCountriesByCodeAsync,
  getCountriesByCurrencyAsync
} from '../../Store/actions/countries'
import Lang from './Lang/Lang'
import { useTranslate } from 'react-redux-multilingual'

function Header() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState("");
  const currentItem = useSelector(store => store.dropdown.currentItem);
  const translate = useTranslate();

  useEffect(() => {
    if (currentItem?.id === 1) {
      setPlaceholder(translate('placeholder1'));
    } else if (currentItem?.id === 2) {
      setPlaceholder(translate('placeholder2'));
    } else if (currentItem?.id === 3) {
      setPlaceholder(translate('placeholder3'));
    } else if (currentItem?.id === 4) {
      setPlaceholder(translate('placeholder4'));
    }
    setValue("");
  }, [currentItem])

  const clickHandler = () => {
    if (currentItem?.id === 1) {
      dispatch(getCountriesByShortnameAsync(value))
    } else if (currentItem?.id === 2) {
      dispatch(getCountriesByLongnameAsync(value))
    } else if (currentItem?.id === 3) {
      dispatch(getCountriesByCodeAsync(value))
    } else if (currentItem?.id === 4) {
      dispatch(getCountriesByCurrencyAsync(value))
    }
    setValue("");
  }

  return (
    <div className="header">
      <input
        type="text"
        placeholder={placeholder || translate('placeholder')}
        onChange={e => setValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter" && currentItem && value) {
            clickHandler()
          }
        }}
        value={value}
      />
      <button
        type="submit"
        onClick={() => {
          clickHandler()
        }}
        disabled={!currentItem || !value}
      >
        {translate('button')}
      </button>
      <Lang />
      <Dropdown />
    </div >
  )
}

export default Header
