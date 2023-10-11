import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Button, Input } from ".";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<any>;
  buttonMsg: string;
  passwordValidation: boolean;
};

const Form = ({ onSubmit, register, buttonMsg, passwordValidation }: Props) => {
  return (
    <form onSubmit={onSubmit} className="mt-8">
      <div className="space-y-5">
        <Input
          label="Full Name: "
          placeholder="Enter your full name"
          {...register("name", {
            required: true
          })}
        />
        <Input
          label="Email: "
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address"
            }
          })}
        />
        <Input
          label="Password: "
          type="password"
          placeholder="Enter your password"
          {...(passwordValidation
            ? {
                ...register("password", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/.test(
                        value
                      ) ||
                      "Password must have 8 or more characters and must  contain at least a uppercase letter, a lowercase letter, a digit, and a symbol."
                  }
                })
              }
            : {
                ...register("password", {
                  required: true
                })
              })}
        />
        <Button type="submit" className="w-full">
          {buttonMsg}
        </Button>
      </div>
    </form>
  );
};

export default Form;
