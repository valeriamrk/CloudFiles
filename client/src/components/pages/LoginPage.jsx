import React, { useState } from "react";
import LoginForm from "../dumb/organism/login/LoginForm";
import * as S from "./styles";
import axios from "axios";
import SearchInput from "../dumb/molecules/SearchInput";
import InputField from "../dumb/atoms/InputField";
import MyButton from "../dumb/atoms/MyButton";

const LoginPage = () => {
  const sendLoginRequest = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username: values.email,
        password: values.password,
      });
      console.log(response);
      // const testResponse = await axios.get("http://127.0.0.1:5000/auth/posts");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.LoginPage>
      <InputField
        placeholder="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="password"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <MyButton>Login</MyButton>
      {/* <LoginForm  sendLoginRequest={sendLoginRequest} /> */}
    </S.LoginPage>
  );
};

export default LoginPage;
