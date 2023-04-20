import logo from "./capa.jpg";
import "./style.sass";

export function About(): JSX.Element {
  return (
    <div id="containerAbout">
      <div className="texto">
        <h1>Sobre Nós</h1>
        <p>
          Nossas portas estão sempre abertas para receber a sua visita. Aqui
          você pode fazer o seu pedido no balcão para levar, ou saboreá-lo aqui
          mesmo, na nossa companhia. <br />{" "}
          <strong>
            Estamos na Rua Jacarezinho, 1456, Mercês, Curitiba – PR, de segunda
            a sexta-feira das 06h30 às 21h. Sábado e domingo abrimos das 7h às
            21h.
          </strong>
        </p>
      </div>
      <img alt="Padaria" src={logo} />
    </div>
  );
}
