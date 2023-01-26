import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <nav>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className='search-section'>
          <Link id={'search'} to={'/browse'}>
            Search restaurants here!
          </Link>
        </div>
        <img src={'logo.jpeg'} style={{ width: 340, height: 280 }} />
      </div>
    </>
  )
}

export default Navbar