import { Link } from "react-router-dom";

const VerticalNavBar = function ({ toggle = 'hidden', handleClick }) {
  return (
    <>
      <ul className={`w-full h-screen flex-col justify-center  bg-secondaryColor items-center gap-10 font-bold text-white absolute text-2xl z-10 ${toggle}`}>
        <Link onClick={handleClick} to="/collections">
          <li>Collections</li>
        </Link>
        <Link onClick={handleClick} to="/library">
          <li>Library</li>
        </Link>
        <Link onClick={handleClick} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </>
  );
};

export default VerticalNavBar;
