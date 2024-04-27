import { Link } from 'react-router-dom'
import HamburgerBtn from './HamburgerBtn';
import logo from '../assets/faviconio-logo/logo.svg'
import mobileLogo from '../assets/faviconio-logo/logo2.svg'


const Nav = function ({ handleClick }) {
  
  return (
    <>
      <nav className="w-full h-20 pr-5 bg-secondaryColor shadow-md flex justify-between items-center fixed z-20">
        <Link to='/' className='flex h-full'>
          <img src={logo} alt="page logo" className='hidden md:block' />
          <img src={mobileLogo} alt="page logo" className='block md:hidden' />
        </Link>

        <HamburgerBtn handleClick={handleClick} />

        <ul className="w-full h-full justify-center items-center gap-24 font-bold text-white hidden sm:flex ">
          <Link to="/collections">
            <li>Collections</li>
          </Link>
          <Link to="/library">
            <li>Library</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;