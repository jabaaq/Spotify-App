"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { useEffect } from "react";
import { setToken } from "./store/slice";
import Login from "@/component/Login/Login";
import { usePathname, useRouter } from "next/navigation";
import cookie from "@boiseitguru/cookie-cutter";

const GetToken = () => {
  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log("TOKEN", token);
  }, [token]);

  useEffect(() => {
    const hash: string = window.location.hash;

    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      // cookies().set("token", token);
      // document.cookie = `token=${token}; path=/`;
      cookie.set("token", token);
      dispatch(setToken(token));
      router.push("/spotify");
    }
  }, [dispatch]);

  useEffect(() => {
    if (!token && pathname !== "/") {
      router.push("/");
    }
  }, [token, router]);

  return <div>{token ? <Login /> : <Login />}</div>; //I have to add Error page here instead of <Login/>
};

export default GetToken;
