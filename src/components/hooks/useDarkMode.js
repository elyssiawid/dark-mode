import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage("mode");

  useEffect(() => {
    if (localStorage.getItem("mode") === "true") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};

export default useDarkMode;
