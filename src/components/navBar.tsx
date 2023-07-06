import { useState } from "react";

const NavBar = () => {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  const handleMenu1Click = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(false);
  };

  const handleMenu2Click = () => {
    setShowMenu2(!showMenu2);
    setShowMenu1(false);
  };

  return (
    <nav className="nav-bar">
      <ul className="menu-1">
        <li onClick={handleMenu1Click}>Menu 1</li>
        <li onClick={handleMenu2Click}>Menu 2</li>
      </ul>
      {showMenu1 && !showMenu2 && (
        <ul className="menu-2">
          <li>Submenu 1.1</li>
          <li>Submenu 1.2</li>
        </ul>
      )}
      {showMenu2 && !showMenu1 && (
        <ul className="menu-2">
          <li>Submenu 2.1</li>
          <li>Submenu 2.2</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
