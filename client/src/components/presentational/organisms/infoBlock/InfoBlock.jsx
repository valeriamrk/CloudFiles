import React from "react";
import { MyButton } from "../../../presentational";
import { BsGear, BsQuestionCircle, BsBoxArrowRight } from "react-icons/bs";

import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/authSlice";
import { Box } from "../../templates/box/Box.styled";

const InfoBlock = (props) => {
  const { handleModalState } = props;

  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <S.BlocksWrapper>
      <S.Block>
        <S.Title>Usage dynamics</S.Title>
        <S.Chart
          // src="https://www.pngmart.com/files/7/Statistics-PNG-Image.png"
          src="https://cdn2.iconfinder.com/data/icons/productivity-dashboard-and-analytical-icon-set/16/chart-1024.png"
          alt="chart"
        />
      </S.Block>
      <S.SecondBlock>
        <S.Title>Used space info</S.Title>
        <S.Chart
          src="https://cdn3.iconfinder.com/data/icons/digital-marketing/512/chart_diagram_analytics_business_flat_icon-512.png"
          alt="chart"
        />
      </S.SecondBlock>

      <MyButton
        startIcon={<BsGear />}
        clickButton={() => handleModalState({ id: 1 })}
        headerStyle={"headerStyle"}
      >
        Settings
      </MyButton>
      <MyButton
        startIcon={<BsQuestionCircle />}
        clickButton={() => handleModalState({ id: 2 })}
        headerStyle={"headerStyle"}
      >
        Help Center
      </MyButton>
      <Box mt={16}>
        <MyButton
          startIcon={<BsBoxArrowRight />}
          clickButton={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </MyButton>
      </Box>
    </S.BlocksWrapper>
  );
};

export { InfoBlock };
