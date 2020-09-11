import React from 'react';
import { useSelector } from 'react-redux';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem';
import { useTranslate } from 'react-redux-multilingual'

function Dropdown() {
  const currentItem = useSelector(store => store.dropdown.currentItem);
  const translate = useTranslate();

  const items = [
    {
      id: 1,
      name: translate('dropdownItem1')
    },
    {
      id: 2,
      name: translate('dropdownItem2')
    },
    {
      id: 3,
      name: translate('dropdownItem3')
    },
    {
      id: 4,
      name: translate('dropdownItem4')
    },
  ]
  return (
    <div className="dropdown">
      <div className="dropdown__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="dropdown__header">
        {currentItem ? currentItem.name : translate('dropdownHeader')}
      </div>
      <ul className="dropdown__list">
        {items.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
