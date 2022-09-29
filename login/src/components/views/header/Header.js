import "./Header.css";
import ToggleSwitch from "../theme/Checkbox";

export default function Header() {
  return (
    <>
      <div className="Header">
        <a href="/">Home</a>
        <div className="blo">
          <ToggleSwitch className="toggle" />
          <a href="/login" className="login">
            로그인
          </a>
        </div>
      </div>
    </>
  );
}
