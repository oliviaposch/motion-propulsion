import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 130px;
  background: none;
  border: 1px rgba(212, 208, 208, 0.619) solid;
  border-radius: 30px;
`;

export const LargeSignInButton = styled(BaseButton)`
  width: 280px;
  height: 60px;
  border-radius: 30px;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  font-size: ${(props) => props.theme.textSizeXS};
  color: ${(props) => props.theme.backgroundWhite};
`;

export const PlatformButton = styled(BaseButton)`
  color: ${(props) => props.theme.backgroundWhite};
  width: 126px;
`;

export const SmallSignUpButton = styled(BaseButton)`
  font-size: ${(props) => props.theme.textSizeXXS};
`;
