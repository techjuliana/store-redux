import Cart from "../components/Cart";
import Catalog from "../components/Catalog";

export function Layout(): JSX.Element {
  return (
    <>
      <div>
      <Catalog />
      <Cart />
      </div>
    </>
  );
}
