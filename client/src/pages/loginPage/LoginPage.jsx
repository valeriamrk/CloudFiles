import React, { useState } from "react";
import { LoginForm } from "../../components/presentational";
import * as S from "./styles";
import axios from "axios";
import { SearchInput } from "../../components/presentational";
import { InputField } from "../../components/presentational";
import { MyButton } from "../../components/presentational";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../store/authSlice";

const LoginPage = () => {

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  return (
    <S.LoginPage>
      <InputField
        placeholder="Enter your email"
        type="text"
        value={email}
        setValue={setEmail}
      />
      <InputField
        placeholder="Enter your password"
        type="text"
        value={password}
        setValue={setPassword}
      />
      <MyButton
      clickButton={() => dispatch(loginAsync({ email, password }))}>Login</MyButton>
      {/* <LoginForm  sendLoginRequest={sendLoginRequest} /> */}
    </S.LoginPage>
  );
};

export { LoginPage };
