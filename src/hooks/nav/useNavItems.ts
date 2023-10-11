import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/store";
import { NavItem } from "../../types";
import { useCallback, useEffect, useState } from "react";

const useNavItems = () => {
  const authStatus = useAppSelector((state) => state.authReducer.status);
  const [navItems, setNavItems] = useState<Array<NavItem>>([]);

  useEffect(
    useCallback(() => {
      setNavItems([
        {
          id: `home-${nanoid()}`,
          name: "Home",
          slug: "/",
          active: true
        },
        {
          id: `login-${nanoid()}`,
          name: "Login",
          slug: "/login",
          active: !authStatus
        },
        {
          id: `signup-${nanoid()}`,
          name: "Signup",
          slug: "/signup",
          active: !authStatus
        },
        {
          id: `all-posts-${nanoid()}`,
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus
        },
        {
          id: `add-post-${nanoid()}`,
          name: "Add Post",
          slug: "/add-post",
          active: authStatus
        }
      ]);
    }, [navItems, setNavItems, nanoid, authStatus]),
    []
  );

  return navItems;
};

export default useNavItems;
