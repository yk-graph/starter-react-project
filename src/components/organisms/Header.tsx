import React, { memo } from 'react'
import styled from 'styled-components'

import MenuNav from '../molecules/MenuNav'

const Header: React.FC = () => {
  return (
    <SHeader>
      <SWrapper>
        <div>LOGO</div>
        <MenuNav />
      </SWrapper>
    </SHeader>
  )
}

export default memo(Header)

const SHeader = styled.header`
  height: 56px;
  width: 100vw;
  background: #f4f4f4;
  position: fixed;
  top: 0;
  z-index: 10;
`
const SWrapper = styled.div`
  height: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
