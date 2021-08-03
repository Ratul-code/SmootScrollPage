import React from "react";
import { Button } from "../ButtonElement";
import {
  SigninContainer,
  SigninContentWrap,
  Siginh1,
  Signinp,
  InputWrap,
  Input,
  LabelEmail,
  LabelPassword,
  InputContainer,
  ForgotPassword
} from "./SigninElements";
const Sigin = () => {
  return (
    <SigninContainer>
      <Siginh1 to="/">dolla</Siginh1>
      <SigninContentWrap>
        <Signinp>Signin to your account</Signinp>
        <InputContainer>
        <InputWrap>
        <LabelEmail htmlFor="email">Email</LabelEmail>
          <Input id="email"/>
          </InputWrap>
          <InputWrap>
          <LabelPassword htmlFor="password">Password</LabelPassword>
          <Input id="password"/>
        </InputWrap>
        <Button primary big fontbig BRNone dark>Continue</Button>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        </InputContainer>
      </SigninContentWrap>
    </SigninContainer>
  );
};

export default Sigin;
