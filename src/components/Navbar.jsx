const Navbar = () => {
  const navbarItems = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Company</a>
      </li>
      <li>
        <a href="#">Resources</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-[#00df9a] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#000300] text-[#00df9a] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navbarItems}
          </ul>
        </div>
        <a className="font-bold text-3xl text-[#00df9a]">Brand</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#00df9a] text-lg font-bold">
          {navbarItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#00df9a]">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
