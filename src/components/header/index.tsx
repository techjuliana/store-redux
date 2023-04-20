import logo from "./logo.jpeg";
import "./style.sass";

const Header: React.FC = () => {
  return (
    <div id="containerHeader">
      <img src={logo} alt="bread" />
    </div>
  );
};
export default Header;
