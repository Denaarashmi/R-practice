import "./Header.css";
import logo from "./audi-logo.png";
console.log(logo);

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="list">
        <li>Menu</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Header;
