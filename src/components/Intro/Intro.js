import React from 'react'
import './Intro.scss'
import { useTranslate } from 'react-redux-multilingual'

function Intro() {
  const translate = useTranslate();
  return (
    <div className='intro'>
      <div className="intro__text">
        {translate('introTitle')}
      </div>
    </div>
  )
}

export default Intro
