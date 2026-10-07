import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './Context/Cart/CartProvider.jsx'
import { AuthProvider } from './Context/Auth/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthProvider>
        
    </StrictMode>,
)
