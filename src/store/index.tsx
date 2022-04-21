import React, { useReducer, createContext, Dispatch, ReactNode } from 'react'
import { UserType } from '../types/User'

type Props = {
  children: ReactNode
}
type Action = {
  type: string
  key?: string
  payload?: UserType
}

export const Store = createContext(
  {} as {
    state: UserType
    dispatch: Dispatch<Action>
  }
)

const initialState = {} as UserType

export const reducer = (state: UserType, action: Action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        id: action.payload!.id,
      }
    case 'logout':
      return initialState
    default:
      return state
  }
}

export const Provider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
