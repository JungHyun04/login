import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <a href="/">Home</a>
      <a href="/login" className="login">
        로그인
      </a>
    </div>
  );
}
