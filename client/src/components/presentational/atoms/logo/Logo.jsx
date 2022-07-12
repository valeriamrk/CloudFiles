import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Logo = (props) => {
  const {handleCancelSelection} = props
  const navigate = useNavigate();
  const path = "";
  const handleItemClick = (event, path) => {
    navigate(path);
    handleCancelSelection()
  };
  return (
    <S.Logo
      src="https://pic.onlinewebfonts.com/svg/img_7140.png"
      alt="logo"
      onClick={(event) => handleItemClick(event, path)}
    />
    // <S.Logo
    //   src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-18.jpg"
    //   alt="logo"
    // />
  );
};

export { Logo };
