import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Store } from './store'

const App: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useContext(Store)

  useEffect(() => {
    if (!state.id) navigate('/login')
  }, [navigate, state.id])

  return <Outlet />
}

export default App
