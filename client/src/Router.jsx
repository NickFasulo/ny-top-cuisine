import Navbar from './components/Navbar.jsx'
import Home from './screens/Home.jsx'
import { Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' elemnet={<browse />} />
      </Routes>
    </div>
  )
}
