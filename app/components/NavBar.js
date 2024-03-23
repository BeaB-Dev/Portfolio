"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isActive, toggleActiveClass] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" id="navBar">
      <a
        role="button"
        className={"navbar-burger " + [isActive ? "is-active" : ""]}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        onClick={() => toggleActiveClass(!isActive)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className={"navbar-menu " + [isActive ? "is-active" : ""]} id="navBarMenu">
        <div className="navbar-start">
          <Link
            className="navbar-item"
            href={"/"}
            id="navBarItem"
          >
            Home
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            className="navbar-item"
            href={"/about"}
            id="navBarItem"
          >
            About
          </Link>
          <Link
            className="navbar-item"
            href={"/projects"}
            id="navBarItem"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
