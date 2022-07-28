import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { InputField, MyButton } from "../../components/presentational";
import { login } from "../../store/authSlice";
import * as S from "./styles";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (email, password) => {
    console.log(email, password);
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("USER", user);
      dispatch(
        login({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
    } catch (error) {
      console.log("Create User With Email And Password Error", error);
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          toast.error("Email Error", error.message);
          break;
        case "auth/weak-password":
          toast.error("Password Error", error.message);
          break;
        default:
      }
    }
  };

  return (
    <S.RegistrationPage>
      <div>Registration</div>
      <InputField
        placeholder="Enter your email"
        type="text"
        value={email}
        setValue={setEmail}
      />
      <InputField
        placeholder="Enter your password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <MyButton clickButton={() => handleRegister(email, password)}>
        Register
      </MyButton>
    </S.RegistrationPage>
  );
};

export { SignUp };
