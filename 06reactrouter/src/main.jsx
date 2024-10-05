import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,BrowserRouter, createBrowserRouter, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[{
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"",
//       element:<Home/>
//     }]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>  
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
