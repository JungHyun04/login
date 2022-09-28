import React from "react";
import "./Main.css";
import Timer from "./Timer";

export default function Main() {
  return (
    <>
      <div className="under">
        <div className="box">
          <Timer />
        </div>
        <div className="body">
          <div>메인</div>
        </div>
        <div className="time">
          <Timer />
        </div>
      </div>
    </>
  );
}
