import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import BadUrl404 from './pages/BadUrl404';
import Layout from './components/Layout/Layout';
import ItemsContainer from './components/ItemsContainer/ItemsContainer';




function App() {
  
    return (
        <>
        <BrowserRouter>
                <Layout>
                    <Routes>        
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<ItemsContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer title="Vista de detalle de producto" />} />
                        <Route path="*" element={<BadUrl404 /> }  />
                    </Routes>
                </Layout>
        </BrowserRouter>
        </>
    )
}

export default App;
