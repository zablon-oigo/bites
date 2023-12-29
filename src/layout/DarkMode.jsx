import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
function DarkModeButton() {
  const [DarkMode, setDarkMode] = useState(
    localStorage.getItem('DarkMode')
      ? JSON.parse(localStorage.getItem('DarkMode'))
      : false
  );

  const element = document.documentElement;

  useEffect(() => {
    if (DarkMode) {
      element.classList.add('dark');
      localStorage.setItem('DarkMode', true);
    } else {
      element.classList.remove('dark');
      localStorage.setItem('DarkMode', false);
    }
  }, [DarkMode]);

  return (
    <div>
    {DarkMode ? <FaToggleOn onClick={() => setDarkMode(!DarkMode)} className="text-3xl cursor-pointer" /> : <FaToggleOff onClick={() => setDarkMode(!DarkMode)} className="text-3xl cursor-pointer" />}
    </div>
  );
}

export default DarkModeButton;
