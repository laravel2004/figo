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
          <li><a href='#' onClick={(e) => {e.preventDefault(); window.location.replace("/#home")}}>Home</a></li>
          <li><a href='#' onClick={(e) => {e.preventDefault(); window.location.replace("/#menu")}}>Menu</a></li>
          <li><a href='#' onClick={(e) => {e.preventDefault(); window.location.replace("/#service")}}>Service</a></li>
          <li><a href='#' onClick={(e) => {e.preventDefault(); window.location.replace("/#sign-in")}}>Sign In</a></li>
          <li><a href='#' onClick={(e) => {e.preventDefault(); window.location.replace("/#beli")}}><img src={Bag} className='w-5 items-center justify-center' /></a></li>
        </Navbar>
        
        <MainContainer />

        <footer className='grid md:grid-cols-2 mt-28 px-4 md:px-10 lg:px-56 warna-bg py-5 md:py-10 gap-4 text-xs md:text-base'>
          <div>
            <img src={Logo} className='w-20'/>
            <p>Don't miss to subcribe to our new feeds, Kindly fill the form bellow</p>
          </div>
          <div className='grid grid-cols-3'>
            <div>
              Our Menu
              <ul className='mt-2'>
                <li><a href='#'>Breakfast</a></li>
                <li><a href='#'>Lunch</a></li>
                <li><a href='#'>Dinner</a></li>
              </ul>
            </div>
            <div>
              Links
              <ul className='mt-2'>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Terms of Use</a></li>
                <li><a href='#'>Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              Contact
              <ul className='mt-2'>
                <li><a href='wa.me/6282228511700'>082228511700</a></li>
                <li><a href='#'>figo@gmail.com</a></li>
                <li><a href='#'>@laravel2004</a></li>
              </ul>
            </div>
          </div>

        </footer>
        <div className='text-center text-xs'>
          Copyright 2023 @agungdwinnn
        </div>

    </div>
  );
}

export default App;
