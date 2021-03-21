import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <NavWrapper>
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
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  nav ul {
    display: flex;

    li {
      list-style: none;
      padding-right: 1em;

      a {
        color: black;
        font-size: 1.2em;
      }
    }
  }
`;
