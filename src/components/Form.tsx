"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  nickName: string;
  email: string;
  password: string;
  //   exampleRequired: string;
}
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // action="/api/save" // Send post request with the FormData
        // encType={'application/json'} you can also switch to json object
        className="flex flex-col justify-center items-center"
      >
        <input
          {...register("nickName", {
            required: "Введіть нік ",
            minLength: { value: 3, message: "Мінімальна довжина 3" },
            maxLength: 20,
          })}
          placeholder="Твій нік або ПІП"
          className="border-solid border-2 "
        />
        <p style={{ color: "red" }}> {errors.nickName?.message}</p>
        <input
          placeholder="Пошта"
          type="email"
          {...register("email", {
            required: "Введіть пошту",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
              message: "Введіть валідну пошту",
            },
          })}
          className="border-solid border-2 "
          //   , { required: true, maxLength: 20 }
        />
        <p style={{ color: "red" }}> {errors.email?.message}</p>

        <input
          placeholder="Пароль"
          {...register("password")}
          className="border-solid border-2 "
          //   , { required: true, min: 18, max: 99 }
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <div className="my-2.5">
          <button
            type="submit"
            className="bg-yellow-300 hover:bg-yellow-400 p-2 rounded-full"
          >
            Зареєструватись
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
