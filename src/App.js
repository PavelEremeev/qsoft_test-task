import logo1 from './images/logo 1.svg';
import logo2 from './images/download 1.svg';
import headerLogo from './images/логотип.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header__wrapper'>
          <img className='header__logo' src={headerLogo} />
          <img className='header__user-logo'/>
          <div className='header__search-container'>
          <input className='header__search-input' placeholder='Найти...'/>
          <img className='header__search-image'/>
          </div>
          <div className='header__user-profile'>
            <p className='header__user-name'></p>
            <img className='header__user-image'/>
          </div>
        </div>
      </header>
      <section className='partners'>
        <h1 className='partners__title'>НАШИ ПАРТНЁРЫ</h1>
        <div className='partners__container'>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
          <div className='partners__block'>
            <img className='partners__image' src={logo1}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
