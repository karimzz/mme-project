import React from 'react' ;
import "./offer.css" ; 
import AllOffers from '../../Components/Offer/AllOffers';
import { ToastContainer } from 'react-toastify';

const OfferPage = () => {
  return (
    <div className='offer-page'>
        <h3 className='offer-title'>Offers </h3>
        <ToastContainer />
        <AllOffers />
    </div>
  )
}

export default OfferPage
