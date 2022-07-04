import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../..";
import { logout } from "../../../../store/authSlice";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";
import * as S from "./styles";
import { BsGear, BsQuestionCircle, BsBoxArrowRight } from "react-icons/bs";

const UserCardMenu = (props) => {
  const { popupOpen, setPopupOpen, handleModalState } = props;
  const ref = useRef();
  useOnClickOutside(ref, () => setPopupOpen(false));

  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <S.UserCardBody
      popupOpen={popupOpen}
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <S.UserMenuItem onClick={() => handleModalState({ id: 1 })}>
        <MyButton
          startIcon={<BsGear />}
          clickButton={() => handleModalState({ id: 1 })}
          headerStyle={"headerStyle"}
        >
          Settings
        </MyButton>
      </S.UserMenuItem>
      <S.UserMenuItem onClick={() => handleModalState({ id: 2 })}>
        <MyButton
          startIcon={<BsQuestionCircle />}
          clickButton={() => handleModalState({ id: 2 })}
          headerStyle={"headerStyle"}
        >
          Help Center
        </MyButton>
      </S.UserMenuItem>
      <S.UserMenuItem
        onClick={() => {
          dispatch(logout());
          navigate("/");
        }}
      >
        <MyButton
          startIcon={<BsBoxArrowRight />}
          clickButton={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </MyButton>
      </S.UserMenuItem>
    </S.UserCardBody>
  );
};

export { UserCardMenu };
