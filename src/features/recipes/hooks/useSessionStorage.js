import { useState } from "react";

export const useSessionStorage = (key, defaultValue, expiryInMinutes = 5) => {
  const [state, setState] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      const isExpired = new Date().getTime() > parsedValue.expiry;
      if (!isExpired) {
        return parsedValue.value;
      }
      sessionStorage.removeItem(key);
    }
    return defaultValue;
  });

  const setSessionStorage = (value) => {
    const expiry = new Date().getTime() + expiryInMinutes * 60 * 1000;
    sessionStorage.setItem(key, JSON.stringify({ value, expiry }));
    setState(value);
  };

  return [state, setSessionStorage];
};
