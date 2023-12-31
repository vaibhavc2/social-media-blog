import { Link } from "react-router-dom";
import { LoginForm, Logo } from "../../components";

type Props = {};

const Login = ({}: Props) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl border border-black/10 bg-gray-100 p-10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="text-primary font-medium transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
