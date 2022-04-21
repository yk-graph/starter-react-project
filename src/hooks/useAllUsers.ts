import { useState, useCallback } from 'react'
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const useAllUsers = () => {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(false)

  const getUsers = useCallback(() => {
    setLoading(true)
    axios
      .get(`${baseUrl}/users`)
      .then((res) => setUsers(res.data))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false))
  }, [])

  return { getUsers, users, loading }
}
