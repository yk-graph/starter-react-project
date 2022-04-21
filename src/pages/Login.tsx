import React, { useContext, useState } from 'react'
import { Store } from '../store'
import { UserType } from '../types/User'

const Login: React.FC = () => {
  const { state, dispatch } = useContext(Store)
  const [user, setUser] = useState<UserType>()

  const login = () => {
    !state.id &&
      dispatch({
        type: 'login',
        key: 'email',
        payload: user!,
      })
  }

  return (
    <>
      <h6>※疑似ログインのため、どのデータでもログインしたことになります</h6>
      <label>
        Email
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...state, id: 1, email: e.target.value })
          }
        />
      </label>
      <button onClick={login}>login</button>
    </>
  )
}

export default Login
