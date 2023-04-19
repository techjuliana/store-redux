import Cart from "../components/Cart";
import Catalog from "../components/Catalog";
import { Intro } from "../components/intro";
import "./style.sass";

export function Layout(): JSX.Element {
  return (
    <>
      <div id="container">
        <Intro />
        <Catalog />
        <Cart />
      </div>
    </>
  );
}
