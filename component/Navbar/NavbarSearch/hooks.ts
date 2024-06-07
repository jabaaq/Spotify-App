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
  const [screenY, setScreenY] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenY = () => {
      setScreenY(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenY);

    return () => {
      window.removeEventListener("resize", handleScreenY);
    };
  }, []);
  return screenY;
};
