
import logo from "./capa.png";
import "./style.sass";

export function Intro(): JSX.Element {
  return (
    <div id="body">
      <img alt="Pães" src={logo} />
      <div className="texto">
        <h1>Padaria Portuguesa</h1>
        <p>Alegria e pão quentinho são as especialidades da casa </p>
      </div>
    </div>
  );
}
