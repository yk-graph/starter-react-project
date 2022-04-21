import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Store } from '../store'
import App from '../App'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import Register from '../pages/Register'
import Top from '../pages/Top'
import User from '../pages/User'

const Router: React.FC = () => {
  const { state } = useContext(Store)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={state.id ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={state.id ? <Navigate to="/" /> : <Register />}
        />

        <Route element={state.id ? <App /> : <Navigate to="/login" />}>
          <Route path="/" element={<Top />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
