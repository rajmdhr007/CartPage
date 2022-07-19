import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Counter from './Counter'
// import Games from './Games'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import NavBar from './pages/NavBar'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/' element={<HomePage/>}/>
        <Route path='/navbar' element={<NavBar/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default MyRoutes