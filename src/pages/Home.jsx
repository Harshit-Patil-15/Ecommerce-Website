
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slidder from '../components/Slidder'

const Home = () => {

  return (
    <div>
    <Announcement/>
   <Navbar/>
   <Slidder/>
   <Categories/>
   <Products/>
   <Newsletter/>
   <Footer/>
   </div>
  )
}

export default Home
