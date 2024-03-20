import { Link } from 'react-router-dom'


const Nav = function () {
  return (
    <>
      <nav className="w-full h-20 bg-blue-400">
        <ul className="w-full h-full flex justify-center items-center gap-10 font-bold text-white ">
            
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