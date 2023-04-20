import Cart from "../Cart";
import Catalog from "../Catalog";
import "./style.sass";

export function Carrinho(): JSX.Element {
  return (
      <div id="containerCarrinho">
        <Catalog />
        <div>
          <Cart />
        </div>
      </div>
  );
}
