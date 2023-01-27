import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

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
        <Link to={'/home'}>
          <h1 className="nav-title" onClick={'/home'}>NYTC</h1>
          </Link>
      </nav>

      <div className={menu_class}>
        <div className='search-section'>
          <Link id={'search'} to={'/browse'}>
            Search restaurants here!
          </Link>
          <Link id={'search'} to={'/create-restaurant'}>
            Add Restaurants Here!
          </Link>

        </div>
        <img src={'logo.jpeg'} style={{ width: 340, height: 280 }} />
        <SocialIcon url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <br></br>
        <SocialIcon url="https://www.instagram.com/unpopularcats/?hl=en" />
        <br></br>
        <SocialIcon url="https://twitter.com/imsohonesttho?lang=en" />
        <br></br>
        <SocialIcon url="https://github.com/NickFasulo/ny-top-cuisine/pull/18" />
        
      </div>
    </>
  )
}

export default Navbar
