import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputField, MyButton } from "../../components/presentational";
import { registration } from "../../store/registrationSlice";
import * as S from "./styles";


const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();


  return <S.RegistrationPage>
    <div>Registration</div>
    <InputField 
    value={email} setValue={setEmail} type="text" placeholder="Enter your name"/>
    <InputField value={password} setValue={setPassword} type="password" placeholder="Enter your password"/>
    <MyButton clickButton={() => dispatch(registration({email, password}))}>Send</MyButton>
  </S.RegistrationPage>;
};

export { RegistrationPage };
