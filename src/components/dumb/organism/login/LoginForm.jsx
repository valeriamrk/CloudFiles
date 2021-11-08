import { Formik } from "formik";
import React from "react";
import InputField from "../../atoms/InputField";
import MyButton from "../../atoms/MyButton";
import * as S from './styles'

const LoginForm = () => {
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
            </S.InputContainer>
            {errors.email && touched.email && errors.email}
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
            {errors.password && touched.password && errors.password}
            <S.BtnContainer>
            <MyButton type="submit" disabled={isSubmitting}>
              Submit
            </MyButton>
            </S.BtnContainer>
          </S.FormStyle>
        )}
      </Formik>
    </S.LoginForm>
  );
};

export default LoginForm;
