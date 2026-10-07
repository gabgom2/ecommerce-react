import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import BadUrl404 from './pages/BadUrl404';
import Cart from './pages/Cart';
import Layout from './components/Layout/Layout';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';
import UserAccess from './pages/UserPages/UserAccess';
import UserLogin from './pages/UserPages/UserLogin';
import UserRegister from './pages/UserPages/UserRegister';




function App() {
  
    return (
        <>
        <BrowserRouter>
            <Layout>
                <Routes>        
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<ItemsContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/user-access" element={<UserAccess />} />
                    <Route path="/user-access/login" element={<UserLogin />} />
                    <Route path='/user-access/register' element={<UserRegister />} />
                    <Route path="*" element={<BadUrl404 /> }  />
                </Routes>
            </Layout>
        </BrowserRouter>
        </>
    )
}

export default App;
