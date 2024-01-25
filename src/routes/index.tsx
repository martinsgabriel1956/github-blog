import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Post } from '../pages'
import { RootLayout } from '../layout/root'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}