import React, { memo } from 'react'
import styled from 'styled-components'

import { FooterHeight } from '../../utils/styles'

const Footer: React.FC = () => {
  return (
    <SFooter>
      <SWrapper>Footer</SWrapper>
    </SFooter>
  )
}

export default memo(Footer)

const SFooter = styled.footer`
  height: ${FooterHeight};
  width: 100vw;
  background: #f4f4f4;
`
const SWrapper = styled.div`
  height: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
