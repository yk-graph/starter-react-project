import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <SMain>
        <SWrapper>
          <Outlet />
        </SWrapper>
      </SMain>
      <Footer />
    </>
  )
}

export default DefaultLayout

const SMain = styled.main`
  height: auto;
  min-height: calc(100vh - 56px - 32px);
  width: 100vw;
  padding-top: 56px;
`
const SWrapper = styled.div`
  height: 100%;
  padding: 16px 40px;
`
