import SignupForm from "@/components/Form";
import React from "react";

type Props = {};

const signUpPage = (props: Props) => {
  return (
    <div className="text-center">
      <h2 className="my-2.5">Реєстрація</h2>
      <SignupForm />
    </div>
  );
};

export default signUpPage;
