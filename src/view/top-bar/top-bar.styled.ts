import { flexbox } from "../../styles/mixins.ts";
import styled, {keyframes} from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Div = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  /* display: flex;
  align-items: center;
  justify-content: space-around;
   */
  ${flexbox({jc:'space-around'})}

  h1{
    font-size: 3rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    color: papayawhip;
  }
  img.logo{
    height: 5rem;
    animation: ${spin} 2s linear infinite;
  }
`;

