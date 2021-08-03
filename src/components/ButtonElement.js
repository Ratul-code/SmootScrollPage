import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: ${({BRNone})=>(BRNone?"7px":"50px")};
  background: ${({ primary }) => (
    primary ? "#01bf71" : "#010606"
  )};
  white-space: nowrap;
  padding: ${({ big }) => (
    big ? "14px 28px" : "12px 30px"
  )};
  color: ${({ dark }) => (
    dark ? "#010606" : "#fff"
  )};
  font-size: ${({ fontbig }) => (
    fontbig ? "20px" : "16px"
  )};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  &:hover {
    background: ${({ primary }) => (
      primary ? "#fff" : "#01bf71"
    )};
    color: ${({ primary }) => (
      primary ? "#010606" : "#010606"
    )};;
  }
`;
