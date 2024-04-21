import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthMiddleware } from './middleware/AuthMiddleware'
import { LoadingProvider } from './contexts/LoadingContext'
import './index.css'
import { MainPage, ArticlePage, LoginPage, RegisterPage, DetailArticle, UserPanel } from './pages/Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: 'articles',
    element: <AuthMiddleware />,
    children: [
      {
        index: true,
        element: <ArticlePage />,
      },
      {
        path: 'detail/:id',
        element: <DetailArticle />
      },
      {
        path: 'account',
        element: <UserPanel />
      },
    ]
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoadingProvider>
    <RouterProvider router={router} />
  </LoadingProvider>
)
