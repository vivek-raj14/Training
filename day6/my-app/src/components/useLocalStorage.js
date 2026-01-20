import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;

    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
