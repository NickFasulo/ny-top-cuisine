import Intro from './screens/Intro.jsx'
import Home from './screens/Home.jsx'
import Browse from './screens/Browse/Browse.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar.jsx'
import RestaurantDetail from './screens/Restaurant-Detail/Restaurant-Detail.jsx'
import Create from './screens/Restaurant-Create-Update/Restaurant-Create.jsx'
import Edit from './screens/Restaurant-Create-Update/Restaurant-Edit.jsx'

export default function Router() {
  return (
    <div className='App'>
      <Navbar />
      <div className='pholder'></div>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/:id' element={<RestaurantDetail />} />
        <Route path='/create-restaurant' element={<Create />} />
        <Route path='/:id/edit' element={<Edit />} />

      </Routes>
    </div>
  )
}
