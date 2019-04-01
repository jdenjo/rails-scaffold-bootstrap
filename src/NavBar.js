import React from "react";
import { NavLink /* Link */ } from "react-router-dom";


function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="/">Your logo here</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"> <NavLink to="/posts/new" className="nav-link">New Post</NavLink></li>
            <li className="nav-item active"><NavLink to="/posts" className="nav-link">Posts</NavLink></li>

            {!currentUser && <NavLink to="/sign_in" className="nav-link">Sign In</NavLink>}
            {currentUser && (
              <>
                {/*
            <> ... </> is a React fragment. It allows to return
            multiple React element without a container React element.
          */}
                <span> {currentUser.full_name}</span>
                <a href="#boo" onClick={handleSignOutClick}>
                  Sign Out
          </a>
              </>
            )}
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
