import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import NavBar from './components/NavBar'
import {Home, Project, About, Contact, AppLayout} from './pages'
import NavBar from './components/NavBar'

function App() {
  // import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
  /// old but the latest method
  // const router = createBrowserRouter(createRoutesFromElements(
        
  //     <Route path="/" element={<AppLayout />}>
        
  //       <Route index element={<Home />}></Route>
  //       <Route path='/project' element={<Project />}></Route>
  //       <Route path='/about' element={<About />}></Route>
  //       <Route path='/contact' element={<Contact />}></Route>
  //     </Route>


  // ))

  return (
    <main>
      {/* <NavBar /> */}
      {/* <h1 className='text-3xl font-bold underline text-red-800'>Hello World!</h1> */}
      {/* <RouterProvider router={router} /> */}
           <Router>
            <NavBar />
                <Routes>
                  <Route index element={<Home />}/>
                  <Route path='/project' element={<Project />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/contact' element={<Contact/>}/>

                </Routes>
          </Router>
      

    </main>
  )
}

export default App
