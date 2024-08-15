import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Step1 from './pages/Step1'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Step1 />
    },
    {
      path: "/step2",
      element: <Step2 />
    },
    {
      path: "/step3",
      element: <Step3 />
    },
    {
      path: "/step4",
      element: <Step4 />
    }
  ])
  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
