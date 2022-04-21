import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
