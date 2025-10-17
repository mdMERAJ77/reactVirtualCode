import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
