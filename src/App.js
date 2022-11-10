import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
 BrowserRouter,
 Routes,
 Route,
 Navigate
} from 'react-router-dom'
// import { useSelector } from 'react-redux';



function App() {
  const user = false;

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Routes>
    <Route path='/products/:category' element={<ProductList/>}/>
   </Routes>
   <Routes>
    <Route path='/product' element={<Product/>}/>
   </Routes>
   <Routes>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Routes>
    <Route path='/login' element={user ? <Navigate replace  to="/" /> : <Login/>}/>
   </Routes>
   <Routes>
    <Route path='/register' element= {user ? <Navigate replace to="/" /> : <Register />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
