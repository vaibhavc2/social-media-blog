import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../types";
import { authService } from "../appwrite/auth";
import { login } from "../store/features/auth/authSlice";
import { Form } from ".";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<User>();
  const [error, setError] = useState("");

  const signup: SubmitHandler<User> = async (data: User) => {
    setError("");
    const userAccount = await authService.createAccount(data);
    if (userAccount) {
      const userData = await authService.getCurrentUser();
      if (userData) dispatch(login(userData));
      navigate("/");
    }
    try {
    } catch (error: unknown) {
      if (error instanceof Error) setError(String(error.message));
    }
  };

  return (
    <>
      {error && <p className="mt-8 text-center text-red-600">{error}</p>}

      <Form
        onSubmit={handleSubmit(signup)}
        register={register}
        passwordValidation
        buttonMsg="Create Account"
      />
    </>
  );
};

export default SignUpForm;
