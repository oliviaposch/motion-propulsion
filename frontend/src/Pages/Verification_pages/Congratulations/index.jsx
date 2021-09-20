import { useHistory } from "react-router";
import styled from "styled-components";
import { LargeSignInButton } from "../../../Components/Verification/Base_Button/styled";
import WrapperRight from "../../../Components/Verification/Right Wrapper";
import Main from "../../../Components/Verification/Main Wrapper";
import Bullets from "../../../Components/Verification/Bullets";
import Tick from "../../../Assets/svgs/tick.svg";
import LeftContainer from "../../../Components/Verification/Left_Wrapper";
const Title = styled.h1`
  font-size: ${(props) => props.theme.textSizeL};
  display: flex;
  justify-content: center;
  font-weight: 400;
  margin-bottom: 40px;
`;

const VerificationSigninButton = styled(LargeSignInButton)``;

const VerificationWrapper = styled(WrapperRight)`
  margin-top: 25vh;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
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

const Paragraph = styled.div`
  width: 350px;
  margin-top: 50px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.black60};
`;

const TickLogo = styled.img`
  color: ${(props) => props.theme.purple};
  width: 100px;
  margin-left: -10px;
  margin-top: 5px;
`;

const LogoWrapper = styled.div`
  border: 4px solid ${(props) => props.theme.purple};
  border-radius: 50%;
  width: 81px;
  height: 81px;
`;

const Congratulations = () => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/signup/verification"); //TODO redirect to verification page
  };

  return (
    <Main>
      <LeftContainer />
      <VerificationWrapper>
        <FlexContainer>
          <Title>Congratulations!</Title>
          <LogoWrapper>
            <TickLogo src={Tick} />
          </LogoWrapper>
          <Paragraph>We've sent a confirmation code to your email</Paragraph>
        </FlexContainer>
        <ButtonField>
          <VerificationSigninButton onClick={onClickHandler}>
            CONTINUE
          </VerificationSigninButton>
          <BulletDiv>
            <Bullets step="2" />
          </BulletDiv>
        </ButtonField>
      </VerificationWrapper>
    </Main>
  );
};

export default Congratulations;