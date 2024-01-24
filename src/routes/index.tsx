import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Post } from '../pages'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}