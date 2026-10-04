import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import BadUrl404 from './pages/BadUrl404';
import Layout from './components/Layout/Layout';




function App() {
  
    return (
        <>
        <BrowserRouter>
                <Layout>
                    <Routes>        
                        <Route path="/" element={<Home />} />
                        <Route path="/detalle" element={<ItemDetailContainer title="Vista de detalle de producto" />} />
                        <Route path="*" element={<BadUrl404 /> }  />
                    </Routes>
                </Layout>
        </BrowserRouter>
        </>
    )
}

export default App;
