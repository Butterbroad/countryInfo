import React from 'react'
import { setCurrentItem } from '../../../../Store/actions/dropdown'
import { useDispatch } from 'react-redux'

function DropdownItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="dropdown__item" onClick={() => dispatch(setCurrentItem(item))}>
      {item.name}
    </li>
  )
}

export default DropdownItem
