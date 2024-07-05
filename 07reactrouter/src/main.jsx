import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

import {Route, RouterProvider, createBrowserRouter,
  createRoutesFromElements    } from 'react-router-dom'


  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Github' element={<Github/>}/>
          <Route path='/User' element={<User/>}/>
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   < RouterProvider router={router}/>
  </React.StrictMode>,
)
