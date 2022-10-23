import logo1 from './images/logo 1.svg';
import logo2 from './images/download 1.svg';
import logo3 from './images/1024px-Ikea_logo 1.svg'
import logo4 from './images/321451_v2 1.svg';
import logo5 from './images/792px-McDonalds_logo1.svg';
import logo6 from './images/CM20200219-db34e-f70d2 1.svg'
import logo7 from './images/path5197.svg';
import logo8 from './images/Vkusno_I_Tochka_symbol.svg';
import headerLogo from './images/логотип.svg'
import userLogo from './images/Frame 10.svg'
import findLogo from './images/Ellipse.svg'
import userImage from  './images/Ellipse 18.png'
import './App.css';
import { useState } from 'react';






function App() {
  const logoArr = [ 
  {img: logo1, alt: 'Логотип1' },
  {img: logo2, alt: 'Логотип2' },
  {img: logo3, alt: 'Логотип3' },
  {img: logo4, alt: 'Логотип4' },  
  {img: logo5, alt: 'Логотип5' },
  {img: logo6, alt: 'Логотип6' },
  {img: logo7, alt: 'Логотип7' },
  {img: logo8, alt: 'Логотип8' }]
  const userName = 'Константин'

  const [logo, setLogo] = useState(logoArr)

  return (
    <div className="App">
      <header className="header">
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
      <section className='partners'>
        <h1 className='partners__title'>НАШИ ПАРТНЁРЫ</h1>
        <div className='partners__container'>
          {logo.map((arr, i) => 
            <div className='partners__block' key={i}>
            <img className='partners__image' src={arr.img} alt={arr.alt}/>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
