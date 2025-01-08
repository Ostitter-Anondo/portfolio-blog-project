import { BsMenuAppFill } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import portfolio from "../../assets/portfolio.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a
          href="https://drive.google.com/uc?export=download&id=10YvIU_y6cK-Fhv__P8T2j45kjySo7RcI"
          target="_blank"
          className="btn btn-accent btn-sm"
        >
          download cv
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300/30 backdrop-blur-lg shadow">
      <div className="flex-1 justify-between lg:justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BsMenuAppFill />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img src={portfolio} className="size-7" alt="" />
          <h1 className="text-primary">
            Ja<span className="text-secondary">w</span>ad
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-2">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
