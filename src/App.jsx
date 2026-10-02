import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemsContainer from './pages/ItemsContainer';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'




function App() {
  
    return (
        <>
        <BrowserRouter>
            <Header />
            
                <main className="relative flex-1 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('public/images/board-game-bg-coelho.jpg')`,}}>

                    {/* Capa blanca para fondo */}
                    <div className="absolute inset-0 bg-white/75" />

                
                    <div className="relative">
                        <Routes>        
                            <Route path="/" element={<Home />} />
                            <Route path="/productos" element={<ItemsContainer greeting="¡Bienvenidos a nuestra tienda!" />} />
                            <Route path="/detalle" element={<ItemDetailContainer title="Vista de detalle de producto" />} />
                        </Routes>
                    </div>
                </main>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App;
