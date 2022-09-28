import React from "react";
import "./Header.css";
import ThemeContext from "../theme/Theme";

export default function Header() {
  return (
    <div className="Header">
      <a href="/">Home</a>
      {/* <ThemeContext /> */}
      <a href="/login" className="login">
        로그인
      </a>
    </div>
  );
}
