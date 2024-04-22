import React from 'react';
import Homepage from './Components/HomeCampo/homepage'
import Loginpage from './Pages/LOGIN/login'
import Category from './Pages/CATEGORY/category'
import Cart from './Pages/CART/cart'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';

const App = () => {
  return (
    
      
    <>

<Router>
  <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/category' element={<Category/>}></Route>
      <Route path='/cart' element={ <Cart/>}></Route>

</Routes>
</Router>

    </>
  )
}

export default App
