import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Store } from './store'

const App: React.FC = () => {
  return <Outlet />
}

export default App
