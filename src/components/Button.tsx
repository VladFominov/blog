import React from "react";

type Props = {
  children?: React.ReactNode;
  buttonType: "button" | "submit";
};

const Button = ({ children, buttonType }: Props) => {
  return (
    <>
      <button type={buttonType}>{children}</button>
    </>
  );
};

export default Button;
