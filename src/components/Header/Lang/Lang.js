import React from 'react';
import './Lang.scss';
import LangItem from './LangItem/LangItem';
import { useSelector } from 'react-redux';

function Lang() {
  const currentLang = useSelector(store => store.lang.currentLang);
  const items = [
    {
      name: 'ENG',
      locale: "en"
    },
    {
      name: 'RU',
      locale: 'ru',
    }
  ]
  return (
    <div className="lang">
      <div className="lang__current">{currentLang?.name}</div>
      <ul className="lang__dropdown">
        {items.map((item, index) => (
          <LangItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Lang
