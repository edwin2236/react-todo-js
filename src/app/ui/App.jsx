import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'Components/Header/index'
import TodoPage from 'app/ui/todos/TodoPage'
import AboutPage from 'app/ui/about/AboutPage'
import BlogPage from 'app/ui/blog/BlogPage'
import UserPage from 'app/ui/users/UserPage'
import Router from 'app/shared/utils/router'

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
