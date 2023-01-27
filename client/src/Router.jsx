import Home from './screens/Home.jsx'
import Browse from './screens/Browse/Browse.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar.jsx'
import RestaurantDetail from './screens/Restaurant-Detail/Restaurant-Detail.jsx'

export default function Router() {
  return (
    <div className='App'>
      <Navbar />
      <div className='pholder'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/:id' element={<RestaurantDetail />} />
        <Route path='/create-restaurant' element={<Home />} />
        <Route path='/:id/edit' element={<RestaurantDetail />} />

      </Routes>
    </div>
  )
}
