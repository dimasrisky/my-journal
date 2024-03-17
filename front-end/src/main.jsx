import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { ArticlePage } from './pages/ArticlePage'
import { LoginPage } from './pages/LoginPage'
import { CreateArticle } from './pages/CreateArticle'
import { RegisterPage } from './pages/RegisterPage'
import { AuthMiddleware } from './middleware/AuthMiddleware'
import { DetailArticle } from './pages/DetailArticle'
import { ManagementPage } from './pages/ManagementPage'

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
        path: 'create',
        element: <CreateArticle />
      },
      {
        path: 'detail/:id',
        element: <DetailArticle />
      },
      {
        path: 'management',
        element: <ManagementPage />
      }
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
  <RouterProvider router={router} />
)
