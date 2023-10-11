import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";

type Props = {
  children: ReactNode;
  authentication: boolean;
};

const Protected = ({ children, authentication = true }: Props) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useAppSelector((state) => state.authReducer.status);

  useEffect(() => {
    // TODO: make this better to understand!!
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
