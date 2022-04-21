import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuNav: React.FC = () => {
  return (
    <SNav>
      <SLink to="/">Top</SLink>
      <SLink to="/users">Users</SLink>
      <SLink to="/posts">Posts</SLink>
    </SNav>
  )
}

export default memo(MenuNav)

const SNav = styled.nav`
  display: flex;
`
const SLink = styled(Link)`
  text-decoration: none;
  margin-left: 16px;
`
