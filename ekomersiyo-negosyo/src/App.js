import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import Details from './components/Details';
import Cart from './components/Cart';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PageNotFound from './pages/PageNotFound';
import { ProductProvider} from './context';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

// document.body.style.backgroundColor ="#F1f5f8";


function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
      <AppNavbar />
      {/* <Container> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductCatalog/>}/>
            <Route path="/details" element= {<Details/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Registration />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path='*' element={<PageNotFound/>}/>

          </Route>
        </Routes> 
        {/* </Container>  */}
    </BrowserRouter>
    </ProductProvider>
    
  );
}

export default App;
