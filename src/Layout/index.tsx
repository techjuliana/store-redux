import Cart from "../components/Cart";
import Catalog from "../components/Catalog";
import { About } from "../components/about";
import { Carrinho } from "../components/carrinho";
import Header from "../components/header";
import { Intro } from "../components/intro";
import "./style.sass";

export function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Carrinho />
    </>
  );
}
