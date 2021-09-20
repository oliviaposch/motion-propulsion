import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LargeSignInButton } from "../../../Components/Verification/Base_Button/styled";
import Input from "../../../Components/Verification/Base_Input";
import WrapperRight from "../../../Components/Verification/Right Wrapper";
import Main from "../../../Components/Verification/Main Wrapper";
import Bullets from "../../../Components/Verification/Bullets";
import LeftContainer from "../../../Components/Verification/Left_Wrapper";
import Axios from "../../../API/index.js";

const Title = styled.h1`
  font-size: ${(props) => props.theme.textSizeL};
  display: flex;
  justify-content: center;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
  width: 100%;
`;

const VerificationForm = styled.form`
  width: 70%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const VerificationSigninButton = styled(LargeSignInButton)``;

const VerificationWrapper = styled(WrapperRight)`
  justify-content: flex-end;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const InputEmail = styled.input`
  pointer-events: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #ccc;
`;
const Verification = () => {
  const registrationEmail = useSelector(state => state.confirmationEmail);
  //console.log(registrationEmail);

  //const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [password_repeat, setPasswordRepeat] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const history = useHistory(); 

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onCodeChange = (event) => {
    setCode(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onPasswordRepeatChange = (event) => {
    setPasswordRepeat(event.target.value);
  };

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const url = "auth/registration/validation/";
    const body = {
      email: registrationEmail,
      username: username,
      code: code,
      password: password,
      password_repeat: password_repeat,
      first_name: first_name,
      last_name: last_name,
    };

    try {
      const resp = await Axios.patch(url, body);
      if (resp.status === 200) {
        history.push("/feed");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Main>
      <LeftContainer />
      <VerificationWrapper>
        <VerificationForm>
          <FlexContainer>
            <Title>Verification</Title>
            <Input name="Validation code" type="text" onChange={onCodeChange} />
            <Grid>
              <InputEmail name={registrationEmail} type="text" readOnly value={registrationEmail} />
              <Input name="Username" type="text" onChange={onUsernameChange} />
              <Input
                name="First name"
                type="text"
                onChange={onFirstNameChange}
              />
              <Input name="Last name" type="text" onChange={onLastNameChange} />
              <Input
                name="Password"
                type="password"
                onChange={onPasswordChange}
              />
              <Input
                name="Password repeat"
                type="password"
                onChange={onPasswordRepeatChange}
              />
            </Grid>
          </FlexContainer>
          <ButtonField>
            <VerificationSigninButton onClick={onHandleSubmit}>
              COMPLETE
            </VerificationSigninButton>
            <BulletDiv>
              <Bullets step="3" />
            </BulletDiv>
          </ButtonField>
        </VerificationForm>
      </VerificationWrapper>
    </Main>
  );
};

export default Verification;
