import Navbar from './components/Navbar';
import './App.css';
import Logo from './assets/Logo.png'
import Bag from './assets/Bag.png'
import MainContainer from './components/MainContainer';


const App = () => {
  return(
    <div className='overflow-x-hidden'>
        <Navbar
        childrenLogo={<img src={Logo} />}
        >
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Service</a></li>
          <li><a href='#'>Sign In</a></li>
          <li><a href='#'><img src={Bag} className='w-5 items-center justify-center' /></a></li>
        </Navbar>
        
        <MainContainer />

    </div>
  );
}

export default App;
