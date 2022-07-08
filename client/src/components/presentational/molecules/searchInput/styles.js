import styled from "styled-components/macro";

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f5f2;
  border: none;
  outline: none;
  border-radius: 20px;
  padding-right: 16px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem;
  cursor: pointer;

`;