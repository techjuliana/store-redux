import logo from "./2.avif";
import "./style.sass";

const Header: React.FC = () => {
  return (
    <div id="containerHeader">
      <img src={logo} alt="bread" />
    </div>
  );
};
export default Header;
