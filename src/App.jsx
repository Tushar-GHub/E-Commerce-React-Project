import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
