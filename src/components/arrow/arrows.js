import React, { useState, useEffect } from 'react';
import 'aditional/colors.css';

import style from 'aditional/toogle.module.css';
import './arrow.css';

function Dark() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="header-right">
        <div className={`Dark ${theme}`} id="Darkbutton">
          <div style={style}>
            <input
              type="checkbox"
              className={style.checkbox}
              id="chk"
              onClick={toggleTheme}
            />
            <label className={style.label} htmlFor="chk">
              <div className={style.ball}></div>
            </label>
          </div>
        </div>
        <div className="content_header"></div>
      </div>

      <div className="header-top">
        <div className={`Dark ${theme}`} id="Darkbutton">
          <div style={style}>
            <input
              type="checkbox"
              className={style.checkbox}
              id="chk"
              onClick={toggleTheme}
            />
            <label className={style.label} htmlFor="chk">
              <div className={style.ball}></div>
            </label>
          </div>
        </div>
        <div className="content_header-top"></div>
      </div>
    </>
  );
}

export default Dark;
