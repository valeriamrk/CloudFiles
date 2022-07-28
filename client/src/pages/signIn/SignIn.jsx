import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputField, MyButton } from "../../components/presentational";
import { login } from "../../store/authSlice";
import { userLogin } from "../../store/authSlice";
import * as S from "./styles";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (email, password) => {
  //   console.log(email, password);
  //   try {
  //     const auth = getAuth();
  //     const { user } = await signInWithEmailAndPassword(auth, email, password);
  //     console.log("USER", user);
  //     localStorage.setItem("user", JSON.stringify(user));
  //     dispatch(
  //       login({
  //         email: user.email,
  //         id: user.uid,
  //         token: user.accessToken,
  //       })
  //     );
  //   } catch (error) {
  //     console.log("SignIn With Email And Password Error", error);
  //     switch (error.code) {
  //       case "auth/Invalid-email":
  //       case "auth/user-disabled":
  //       case "auth/user-not-found":
  //         toast.error("Email Error", error.message);
  //         break;
  //       case "auth/wrong-password":
  //         toast.error("Password Error", error.message);
  //         break;
  //       default:
  //     }
  //   }
  // };

  // with Redux Toolkit
  const handleLogin = async (email, password) => {
    try {
      await dispatch(userLogin({ email, password })).unwrap();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          console.log("Email Error", error.message);
          toast.error("Email Error", error.message);
          break;
        case "auth/wrong-password":
          toast.error("Password Error", error.message);
          break;
        default:
      }
    }
  };

  return (
    <S.LoginPage>
      <S.Container>
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
        <MyButton clickButton={() => handleLogin(email, password)}>
          Login
        </MyButton>
      </S.Container>
      <ToastContainer />
    </S.LoginPage>
  );
};

export { SignIn };
