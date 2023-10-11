import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/features/auth/authSlice";
import { Form } from ".";
import { useAppDispatch } from "../store";
import { authService } from "../appwrite/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLogin } from "../types";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<UserLogin>();
  const [error, setError] = useState("");

  const login: SubmitHandler<UserLogin> = async (data: UserLogin) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin);
        navigate("/");
      } else {
      } // alert user to create account and navigate to the signup page
    } catch (error: unknown) {
      if (error instanceof Error) setError(String(error.message));
    }
  };

  return (
    <>
      {error && <p className="mt-8 text-center text-red-600">{error}</p>}

      <Form
        onSubmit={handleSubmit(login)}
        register={register}
        passwordValidation={false}
        buttonMsg="Sign In"
      />
    </>
  );
};

export default LoginForm;
