import { useState, useEffect } from "react";

function useLocalStorage(key, intialValue) {
  const [state, setState] = useState(() => {
    try {
      const localData = localStorage.getItem(key);
      return localData ? JSON.parse(localData) : intialValue;
    } catch {
      return intialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  },[key,state]);

  return [state, setState];
}

export default useLocalStorage;