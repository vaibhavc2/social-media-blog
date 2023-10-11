import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { authService } from "../../appwrite/auth";
import { login, logout } from "../../store/features/auth/authSlice";
import { toggleLoading } from "../../store/features/loading/loadingSlice";

const useAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(toggleLoading()));
  }, []);
};

export default useAuth;
