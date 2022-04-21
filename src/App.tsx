import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  return <Outlet />
}

export default memo(App)
