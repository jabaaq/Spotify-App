"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";
import { setToken } from "./store/slice";
export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { token } = useSelector((state: RootState) => state.spotifyReducer);

  useEffect(() => {
    const hash: string = window.location.hash;
    if (hash) {
      const token: string = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(setToken(token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!token && window.location.pathname !== "/") {
      router.push("/");
    }
  }, [token, router]);

  return token;
};
