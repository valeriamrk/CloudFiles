import React from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const NavigationSidebar = () => {
  return (
    <S.Sidebar>
      <div>User Name</div>
      <ul>
        <li>
          <NavLink to="/allfiles">All files</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/sharedfiles">Shared files</NavLink>
        </li>
        <li>
          <NavLink to="/recyclebin">Recycle bin</NavLink>
        </li>
      </ul>
    </S.Sidebar>
  );
};

export default NavigationSidebar;
