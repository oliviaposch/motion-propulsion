import styled from "styled-components";
import { SmallSignUpButton } from "../Base_Button/styled";

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 25%;
  padding: 40px 40px 0 40px;
`;

const AccountText = styled.p`
  padding: 12px 16px;
  font-size: ${(props) => props.theme.textSizeS};
`;

const VerificationTop = ({ message, btn, onClick }) => {
  return (
    <TopBar>
      <AccountText>{message}</AccountText>
      <SmallSignUpButton onClick={onClick}>{btn}</SmallSignUpButton>
    </TopBar>
  );
};

export default VerificationTop;
