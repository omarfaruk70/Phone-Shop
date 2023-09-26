import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md py-3">
      <nav className="flex justify-between  md:flex-row max-w-7xl mx-auto">
        <div>
          <h1 className="text-xl font-semibold">Phone Shop</h1>
        </div>
        <ul className="flex gap-20">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 text-md font-semibold underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 text-md font-semibold underline" : ""
              }
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 text-md font-semibold underline" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
