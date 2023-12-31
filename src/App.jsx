import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import ShopContextProvider from './context/ShopContextProvider'


function App() {
  return (
    <div className="App"> 
      <ShopContextProvider>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Shop></Shop>} />
            <Route path="/cart" element={<Cart></Cart>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
