import React, { useCallback } from "react";
import { IProduct } from "../../store/modules/cart/types";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IState } from "../../store";
import "./style.sass";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFiledStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const addCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article id="containerItem">
      <img alt="Produto" src={product.imagem} />
      <div className="alinhamentoButton">
        <div className="sobreProduto">
          <strong>{product.title}</strong>
          <strong>{product.about}</strong>
          <strong>R$: {product.price}</strong>
        </div>

        <div className="containerButton">
        <button type="button" onClick={addCart}>
          Comprar
        </button>
        </div>
        {hasFiledStockCheck && <span>Acabou :(</span>}
        </div>
     
    </article>
  );
};

export default CatalogItem;
