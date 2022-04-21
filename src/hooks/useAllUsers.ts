import { useState, useCallback } from 'react'
import axios from 'axios'

import { UserType } from '../types/User'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const useAllUsers = () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [loading, setLoading] = useState(false)

  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get<UserType[]>(`${baseUrl}/users`)
      .then((res) => setUsers(res.data))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { getUsers, users, loading }
}
