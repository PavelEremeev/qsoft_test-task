import React from 'react'
import './Header.css'

export default function Header({headerLogo, userLogo, findLogo, userName, userImage }) {
  return (
    <header className='header'>
        <div className='header__wrapper'>
          <div className='header__logo-container'>
          <img className='header__logo' src={headerLogo} alt='лого'/>
          <img className='header__user-logo' src={userLogo} alt='юзерлого'/>
          </div>
          <div className='header__search-container'>
          <input className='header__search-input' placeholder='Найти...'/>
          <img className='header__search-image' src={findLogo} alt='логопоиска'/>
          </div>
          <div className='header__user-profile'>
            <p className='header__user-name'>{userName}</p>
            <img className='header__user-image' src={userImage} alt='фотопрофиля'/>
          </div>
        </div>
      </header>
  )
}
