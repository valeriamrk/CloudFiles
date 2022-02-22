import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField, MyButton } from "../../components/presentational";
import { registrationAsync } from "../../store/authSlice";
// import { createDir } from "../../store/filesSlice";
import * as S from "./styles";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.RegistrationPage>
      <div>Registration</div>
      <InputField
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Enter your email"
      />
      <InputField
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter your password"
      />
      {/* <MyButton
        clickButton={() => dispatch(registrationAsync({ email, password }))}
      >
        Send
      </MyButton> */}
      <MyButton
        clickButton={() => dispatch(registrationAsync({ email, password }))}
      >
        Send
      </MyButton>
    </S.RegistrationPage>
  );
};

export { RegistrationPage };
