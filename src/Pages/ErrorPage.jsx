import React from 'react'
import { useRouteError } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NotFound from './NotFound'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <Navbar/>
       <Footer/>
    </>
  )
}

export default ErrorPage