import { Link } from "react-router-dom";
import { Logo } from "../../components";
import SignUpForm from "../../components/SignUpForm";

const Signup = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl border border-black/10 bg-gray-100 p-10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-primary font-medium transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;
