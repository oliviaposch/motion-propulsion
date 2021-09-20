import React from "react";
import { ReactComponent as Bullet } from "../../../Assets/svgs/Oval.svg";
import styled from "styled-components";

const BulletWrapper = styled.div`
  width: 56px;
  height: 10px;
  display: flex;
  justify-content: space-between;
`;

const Bullets = ({ step }) => {
  return (
    <BulletWrapper>
      {/* Here we have to know in which step of the verification process we are in */}
      {step === "1" ? (
        <Bullet fill="black" />
      ) : (
        <Bullet fill="none" opacity="0.2" />
      )}
      {step === "2" ? (
        <Bullet fill="black" />
      ) : (
        <Bullet fill="none" opacity="0.2" />
      )}
      {step === "3" ? (
        <Bullet fill="black" />
      ) : (
        <Bullet fill="none" opacity="0.2" />
      )}
    </BulletWrapper>
  );
};
export default Bullets;
