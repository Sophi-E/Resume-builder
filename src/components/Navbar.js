import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-resume">Create Resume</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
