import { lighten, darken } from "polished";
import styled from "styled-components";


interface BtnProps{
    bg?:  string;
  }
export const Btn = styled.button<BtnProps>`
    outline-style: none;
    border-style: none;
    background: ${(props)=> props.bg? props.bg : 'skyblue'};
    background: ${(props)=> props.bg || 'skyblue'};
    background: ${({bg})=> bg || 'skyblue'};
    text-transform: uppercase;
    color: white;
    font-size: 2.8rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: "Yanone Kaffeesatz", sans-serif;
  
    &:hover {
      background: ${({bg})=> lighten(0.1,bg || 'skyblue')};
    }
    &:active {
      background: fuchsia;
      background: ${({bg})=> darken(0.1,bg || 'skyblue')};
    }
  `
export const FancyBtn = styled(Btn)`
    border: white 2px solid;
    border-radius: 0;
  `