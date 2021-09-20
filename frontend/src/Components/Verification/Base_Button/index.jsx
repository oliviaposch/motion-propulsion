import React from "react";
import { BaseButton } from "./styled";

const Button = ({ action }) => {
  return (
    <BaseButton large name={action}>
      {action}
    </BaseButton>
  );
};

export default Button;
