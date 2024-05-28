import React from "react"
import Header from "../Layout/Header/Header"
import Sliders from "../Slider/Sliders"
import Categories from "../Categories/Categories"
import Products from "../Products/Products"
import Campaigns from "../Campaigns/Campaigns"
import Blogs from "../Blogs/Blogs"
import Brands from "../Brands/Brands"
import CampaignSingle from "../CampaignSingle/CampaignSingle"
import Policy from "../Layout/Policy/Policy"

function Homepage() {
  return (
    <React.Fragment>
    
    <Sliders />
    <Categories />
    <Products />
    <Campaigns />
    <Products />
    <Blogs />
    <Brands />
    <CampaignSingle />
    <Policy />
   
    </React.Fragment>
  )
}

export default Homepage