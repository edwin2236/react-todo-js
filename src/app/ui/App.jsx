import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './about/AboutPage'
import BlogPage from './blog/BlogPage'
import TodoPage from './todos/TodoPage'
import UserPage from './users/UserPage'
import Router from '../core/utils/router'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path={Router.todos} element={<TodoPage />} />
        <Route path={Router.about} element={<AboutPage />} />
        <Route path={Router.blog} element={<BlogPage />} />
        <Route path={Router.users} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}
