import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import AboutUs from '../components/about/AboutUs'
import Servise from '../components/servise/Servise'
import Covid from '../components/covid/Covid'
import Articles from '../components/articles/Articles'
import ContactUs from '../components/conatctUs/ContactUs'
import Footer from '../components/footer/Footer'

const homePage = () => {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <main>
        <AboutUs/>
        <Servise/>
        <Covid/>
        <Articles/>
        <ContactUs/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default homePage