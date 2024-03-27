import { Link } from 'react-router-dom'
import HamburgerBtn from './HamburgerBtn';


const Nav = function () {
  return (
    <>
      <nav className="w-full h-20 px-2 bg-blue-400 flex justify-between items-center">
        <Link to='/'>
          <img src="" alt="page logo" />
        </Link>
        <HamburgerBtn />
        <ul className="w-full h-full justify-center items-center gap-10 font-bold text-white hidden sm:flex ">
            
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