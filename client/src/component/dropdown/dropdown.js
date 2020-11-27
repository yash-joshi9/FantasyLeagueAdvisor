import React, { useRef } from "react";
import "./style.scss";
import { useDetectOutsideClick } from "../useDetectOutsideClick";


export default function DropDown({children}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <div onClick={onClick} className="menu-trigger">
          <span>Teams</span>
        </div>
        <nav
          ref={dropdownRef}
          onClick={onClick}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          {children}
        </nav>
      </div>
    </div>
  );
}
