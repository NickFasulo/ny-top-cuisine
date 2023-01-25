import Home from './screens/Home.jsx'
import Browse from './screens/Browse/Browse.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import RestaurantDetail from './screens/Restaurant-Detail/Restaurant-Detail.jsx'

export default function Router() {
  return (
    <div className='App'>
      <Navbar />
      <div className='pholder'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/browse/:id' element={<RestaurantDetail />} />
      </Routes>
    </div>
  )
}
