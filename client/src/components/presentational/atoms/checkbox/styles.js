import styled from "styled-components/macro";

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
/* visibility: hidden; */
`

export const StyledCheckbox = styled.label`
/* display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px; */
`

