import cookie from "@boiseitguru/cookie-cutter";
import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useSize = () => {
  const [screenY, setScreenY] = useState(0);

  const [itemsNum, setItemsNum] = useState<number>(5);

  useEffect(() => {
    const handleScreenY = () => {
      setScreenY(window.innerWidth);
      if (window.innerWidth < 720) {
        setItemsNum(2);
      } else if (window.innerWidth < 850) {
        setItemsNum(3);
      } else if (window.innerWidth < 1000) {
        setItemsNum(4);
      } else {
        setItemsNum(5);
      }
    };

    handleScreenY();

    window.addEventListener("resize", handleScreenY);

    return () => {
      window.removeEventListener("resize", handleScreenY);
    };
  }, []);
  return { itemsNum, screenY };
};

export const handleLogOut = (): void => {
  cookie.set("token", "", { expires: new Date(0) });
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "/";
};
