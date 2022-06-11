import { useState } from 'react';
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
import { UserProvider } from './UserContext';
import { ProductProvider} from './context';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import SpecificProduct from './pages/SpecificProduct';
import UserView from './components/UserView';



function App() {
  const [ user, setUser ] = useState({
    accessToken: localStorage.getItem('accessToken'),
    isAdmin: localStorage.getItem('isAdmin') ==='true'
})


  const unsetUser = () =>{
    localStorage.clear();
  }


  return (
  <UserProvider value = {{ user, setUser, unsetUser}}>
    <ProductProvider>
      <BrowserRouter>
        <AppNavbar />
        {/* <Container> */}
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductCatalog />} />
              <Route path="/details" element={<Details />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/adminPage" element={<AdminPage />} />
              <Route path="/specific" element={<SpecificProduct />} />
              <Route path="/userView" element={<UserView />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        {/* </Container> */}
      </BrowserRouter>
    </ProductProvider>
    </UserProvider>
    
  );
}

export default App;
