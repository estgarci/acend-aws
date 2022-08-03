import { useState } from "react";
import { fetchUser } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

export const useLocalStorage = (keyName, defaultValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else if(defaultValue) {
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
            return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};