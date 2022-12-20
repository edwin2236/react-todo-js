import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import TodoPage from './pages/TodoPage'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/todos" element={<TodoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}
