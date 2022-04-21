import { useCallback, useContext, useState } from 'react'

import { Store } from '../store'
import { UserType } from '../types/User'

export const useAuth = () => {
  const { state } = useContext(Store)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>(state)

  const isLogin = useCallback(() => {
    state.id ? setCurrentUser(state) : undefined
  }, [state])

  return {
    isLogin,
    currentUser,
  }
}
