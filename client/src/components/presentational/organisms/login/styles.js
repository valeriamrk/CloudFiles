import styled from "styled-components/macro";

export const LoginForm = styled.div`
  display: flex;
  background-color: #3aafa9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  width: 300px;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnContainer = styled.div`
  margin-top: 16px;
`;
export const InputContainer = styled.div`
  margin-top: 16px;
`;
export const LoginText = styled.div`
  font-weight: 630;
  font-size: 30px;
`;

export const ErrorContainer = styled.div`
  display: block;
  visibility: visible;
  height: 16px;
`;
