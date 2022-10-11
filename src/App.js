import logo1 from './images/logo 1.svg';
import logo2 from './images/download 1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">


      </header>
      <section className='partners'>
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
