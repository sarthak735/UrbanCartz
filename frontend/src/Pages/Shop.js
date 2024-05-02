import React from 'react'
// import MainPage from '../MainPage/MainPage';
import MainPage from '../Components/MainPage/MainPage.js'
import Popular from '../Components/Popular/Popular.js';
import Offers from '../Components/Offers/Offers.js';
import NewCollections from '../Components/NewCollections/NewCollections.js';
import NewsLetter from '../Components/NewsLetter/NewsLetter.js';


const Shop = () => {
  return (
    <div>
      <MainPage/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop



