import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import Register from '../pages/Register'
import Top from '../pages/Top'
import User from '../pages/User'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<App />}>
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
