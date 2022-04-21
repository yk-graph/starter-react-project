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
import AuthLayout from '../components/templates/AuthLayout'
import DefaultLayout from '../components/templates/DefaultLayout'
import PlaneLayout from '../components/templates/PlaneLayout'

const Router: React.FC = () => {
  const { state } = useContext(Store)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={state.id ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={state.id ? <Navigate to="/" /> : <Register />}
          />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route element={state.id ? <App /> : <Navigate to="/login" />}>
            <Route path="/" element={<Top />} />
            <Route path="/users" element={<User />} />
            <Route path="/posts" element={<Post />} />
          </Route>
        </Route>

        <Route element={<PlaneLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
