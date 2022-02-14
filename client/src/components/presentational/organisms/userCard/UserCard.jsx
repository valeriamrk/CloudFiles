import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyButton } from "../..";
import { logout } from "../../../../store/authSlice";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import * as S from "./styles";

const UserCard = (props) => {
  const { popupOpen, setPopupOpen } = props;
  const ref = useRef();
  useOnClickOutside(ref, () => setPopupOpen(false));

  const dispatch = useDispatch()

  return (
    <S.UserCardBody
      popupOpen={popupOpen}
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <S.Avatar
        src="https://miro.medium.com/fit/c/1360/1360/1*2ZX7AutTwwLNuh-onAyfQA.png"
        alt="avatar"
      />
      <div>
        <S.Username>User Name</S.Username>
        <MyButton premium="premium" clickButton={() => dispatch(logout())}>Logout</MyButton>
      </div>
    </S.UserCardBody>
  );
};

export { UserCard };
