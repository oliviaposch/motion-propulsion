import styled from "styled-components";
import Input from "../../../Components/Verification/Base_Input";
import avatarIcon from "../../../Assets/svgs/avatar.svg";
import passwordIcon from "../../../Assets/svgs/password.svg";
import { LargeSignInButton } from "../../../Components/Verification/Base_Button/styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import WrapperRight from "../../../Components/Verification/Right Wrapper";
import Main from "../../../Components/Verification/Main Wrapper";
import VerificationTop from "../../../Components/Verification/Top Bar";
import LeftContainer from "../../../Components/Verification/Left_Wrapper";
import Axios from "../../../API/index.js";

const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
`;

const InputDiv = styled.div`
  width: 340px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.textSizeL};
  font-weight: ${(props) => props.theme.textWeightRegular};
  margin-bottom: 65px;
`;

const ButtonField = styled.div`
  display: flex;
  flex-direction: row;
  height: 35%;
  justify-content: center;
  align-items: center;
`;

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onHandleSubmit = async () => {
    const url = "auth/token/";
    const body = {
      email: email,
      password: password,
    };

    try {
      const resp = await Axios.post(url, body);
      if (resp.status === 200) {
        setEmail("");
        setPassword("");

        dispatch({
          type: "SIGNIN",
          payload: resp.data,
        });
        localStorage.setItem("token", resp.data.access);
        history.push("/feed");
      }
    } catch (err) {
      if (err.response.status === 400) {
        console.log(err.response);
      }
    }
  };

  const onSignupHandler = () => {
    history.push("/signup");
  };

  return (
    <Main>
      <LeftContainer />
      <WrapperRight>
        <VerificationTop
          message="Don't have an account?"
          btn="Sign Up"
          onClick={onSignupHandler}
        />
        <SignInForm>
          <Title>Sign In</Title>
          <InputDiv>
            <Input
              name="Email"
              type="text"
              icon={avatarIcon}
              onChange={onEmailChange}
            />
            <Input
              name="Password"
              type="Password"
              icon={passwordIcon}
              onChange={onPasswordChange}
            />
          </InputDiv>
        </SignInForm>
        <ButtonField>
          <LargeSignInButton onClick={onHandleSubmit}>
            SIGN IN
          </LargeSignInButton>
        </ButtonField>
      </WrapperRight>
    </Main>
  );
};

export default SignIn;
