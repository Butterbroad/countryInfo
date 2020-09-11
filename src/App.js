import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux'
import Country from './components/Country/Country';
import Loader from './components/Loader/Loader';
import Intro from './components/Intro/Intro';


function App() {
  const country = useSelector(store => store.countries.countries);
  const loading = useSelector(store => store.loader.loading);
  console.log(country)
  return (
    <div className="app">
      <Header />
      {loading ? <Loader />
        :
        !!country?.length && Array.isArray(country)
          ? country.map((country, index) => (
            <Country key={index} country={country} />
          ))
          : <Intro />

      }
    </div>
  );
}

export default App;
