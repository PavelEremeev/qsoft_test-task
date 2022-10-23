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

import Header from './components/Header';
import Partners from './components/Partners';

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

  return (
    <div className='App'>
      <Header 
      headerLogo={headerLogo}
      userLogo={userLogo}
      findLogo={findLogo}
      userImage={userImage}
      userName={userName}
      />
      <Partners
      logoArray={logoArr}
      />
    </div>
  );
}

export default App;
