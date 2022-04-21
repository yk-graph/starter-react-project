import React, { useEffect } from 'react'
import Router from './router'

import { useAllUsers } from './hooks/useAllUsers'

const App: React.FC = () => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return <Router />
}

export default App
