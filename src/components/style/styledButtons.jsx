import styled from "styled-components";



export const StickyBottomButton = styled.button`
  width: ${props => `${props.btnSize}`};
  background-color: ${props => `${props.bgColor}`};
  border : ${props => `${props.border}`};
  color: ${props => `${props.textColor}`};
  padding: 1em;
  font-weight: 500;
  
`