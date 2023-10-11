import authService from "../../appwrite/auth";
import { logout } from "../../store/features/auth/authSlice";
import { useAppDispatch } from "../../store/store";

const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch((err) => console.log(err));
    // .finally();
  };
  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="inline-bock rounded-full px-6 py-2 duration-200 hover:bg-blue-800"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
