import React from 'react'
import Header from '../Layout/Header/Header'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import CampaignSingle from '../CampaignSingle/CampaignSingle'
import Policy from '../Layout/Policy/Policy'
import Footer from '../Layout/Footer/Footer'

function ShopPage() {
  return (
   <React.Fragment>

    <Categories/>
    <Products/>
    <CampaignSingle/>
    <Products/>
    <Policy/>
  
   </React.Fragment>
  )
}

export default ShopPage