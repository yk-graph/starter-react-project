import React, { useReducer, createContext, Dispatch, ReactChild } from 'react'
import { UserType } from '../types/User'

type Props = {
  children: ReactChild
}
type Action = {
  type: string
  key: string
  payload: UserType
}
interface Store {
  state: UserType
  dispatch: Dispatch<Action>
}

export const Store = createContext<Store | undefined>(undefined)

const initialState = {} as UserType

export const reducer = (state: UserType, action: Action) => {
  switch (action.type) {
    case 'setUsers':
      return {
        ...state,
        id: action.payload.id,
      }
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
