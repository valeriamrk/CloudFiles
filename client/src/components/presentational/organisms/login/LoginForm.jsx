import { Formik } from "formik";
import React from "react";
import { InputField } from "../../../presentational";
import { MyButton } from "../../../presentational";
import * as S from "./styles";

const LoginForm = (props) => {
  const { sendLoginRequest } = props;

  const login = (values) => {
    console.log(values);
    sendLoginRequest(values);
  };
  const register = () => {};
  return (
    <S.LoginForm>
      <S.LoginText>Login</S.LoginText>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Field is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          login(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <S.FormStyle onSubmit={handleSubmit}>
            <S.InputContainer>
              <InputField
                type="email"
                name="email"
                placeholder="e-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <S.ErrorContainer>
                {errors.email && touched.email && errors.email}
              </S.ErrorContainer>
            </S.InputContainer>

            <S.InputContainer>
              <InputField
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </S.InputContainer>
            <S.ErrorContainer>
              {errors.password && touched.password && errors.password}{" "}
            </S.ErrorContainer>
            <S.BtnContainer>
              {/* <MyButton type="submit" disabled={isSubmitting} premium={"premium"} >
                Login
              </MyButton> */}
              <MyButton onClick={() => login()} premium={"premium"}>
                Login
              </MyButton>
              <MyButton
                type="submit"
                disabled={isSubmitting}
                premium={"premium"}
              >
                Registration
              </MyButton>
            </S.BtnContainer>
          </S.FormStyle>
        )}
      </Formik>
    </S.LoginForm>
  );
};

export { LoginForm };
