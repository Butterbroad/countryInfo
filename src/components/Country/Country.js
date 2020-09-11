import React from 'react'
import './Country.scss'

function Country({ country }) {
  return (
    <div className='country' style={{ backgroundImage: `url(${country?.flag})` }}>
      <div className="country__wrapper">
        <div className="country__name">{country?.name}</div>
        <div className="country__capital">{country?.capital && `Capital: ${country.capital}`}</div>
        <div className="country__population">{country?.population && `Population: ${country.population}`}</div>
        <div className="country__area">{country?.area && `Area: ${country.area} km`}<sup>{country?.area && '2'}</sup></div>
        <div className="country__region">{country?.region && `Region: ${country.region}`}</div>
        <div className="country__currency">
          Currencies:
        </div>
        {country?.currencies?.map((item, index) => (
          <div key={index}>
            <span>currency code: {item.code} </span>
            <span>currency symbol: {item.symbol} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Country
