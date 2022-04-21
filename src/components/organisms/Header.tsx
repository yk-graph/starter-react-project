import React, { memo, useContext } from 'react'
import styled from 'styled-components'

import { useAuth } from '../../hooks/useAuth'
import { Store } from '../../store'
import MenuNav from '../molecules/MenuNav'
import { HeaderHeight } from '../../utils/styles'

const Header: React.FC = () => {
  const { currentUser } = useAuth()
  const { dispatch } = useContext(Store)

  const logout = () =>
    dispatch({
      type: 'logout',
    })

  return (
    <SHeader>
      <SWrapper>
        <div>LOGO</div>
        <SNavWrap>
          <MenuNav />
          <SButton onClick={logout}>{currentUser ? 'Logout' : 'Login'}</SButton>
        </SNavWrap>
      </SWrapper>
    </SHeader>
  )
}

export default memo(Header)

const SHeader = styled.header`
  height: ${HeaderHeight};
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
const SNavWrap = styled.div`
  display: flex;
  align-items: center;
`
const SButton = styled.button`
  margin-left: 16px;
`
