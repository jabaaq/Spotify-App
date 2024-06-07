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
  const [itemsNum, setItemsNum] = useState(5);

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
  return { screenY, itemsNum };
};
