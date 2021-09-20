import styled from "styled-components";
import Input from "../../../Components/Verification/Base_Input";
import avatar from "../../../Assets/svgs/avatar.svg";
import { LargeSignInButton } from "../../../Components/Verification/Base_Button/styled";
import WrapperRight from "../../../Components/Verification/Right Wrapper";
import Main from "../../../Components/Verification/Main Wrapper";
import VerificationTop from "../../../Components/Verification/Top Bar";
import Bullets from "../../../Components/Verification/Bullets";
import { useHistory } from "react-router";
import React, { useState } from "react";
import { useDispatch } from "react-redux"
import LeftContainer from "../../../Components/Verification/Left_Wrapper";
import Axios from "../../../API/index.js";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 75vh;
`;
const InputDiv = styled.div`
  width: 340px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.textSizeL};
  margin-bottom: 40px;
  font-weight: ${(props) => props.theme.textWeightRegular};
`;
const ButtonField = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: center;
  align-items: center;
`;

const BulletDiv = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const onEmailChange = (event) => {
    //console.log(event.target.value);
    setEmail(event.target.value);
  };

  const onSignInHandler = () => {
    history.push("/signin");
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const url = "auth/registration/";
    const body = {
      email: email,
    };
    try {
      const resp = await Axios.post(url, body);
      if (resp.status === 200) {
        //console.log(resp);
        const action = {
          type: "registration_email",
          payload: email
        }
        dispatch(action);
        history.push("/signup/success");
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log("This email is taken");
      }
    }
  };

  return (
    <Main>
      <LeftContainer />
      <WrapperRight>
        <VerificationTop
          message="Already have an account?"
          btn="Sign In"
          onClick={onSignInHandler}
        />
        <SignInForm>
          <FlexContainer>
            <Title>Sign Up</Title>
            <InputDiv>
              <Input
                name="Email"
                type="text"
                icon={avatar}
                onChange={onEmailChange}
              />
            </InputDiv>
          </FlexContainer>
          <ButtonField>
            <LargeSignInButton onClick={onHandleSubmit}>
              CONTINUE
            </LargeSignInButton>
            <BulletDiv>
              <Bullets step="1" />
            </BulletDiv>
          </ButtonField>
        </SignInForm>
      </WrapperRight>
    </Main>
  );
};

export default SignUp;
