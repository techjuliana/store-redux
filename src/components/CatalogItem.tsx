import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IState } from "../store";

// import { Container } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFiledStockCheck = useSelector<IState, boolean>(
    state => {
      return state.cart.failedStockCheck.includes(product.id)
    }
  )

  const addCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      <strong>{product.price}</strong>
      <button type="button" onClick={addCart}>
        Comprar
      </button>
      {hasFiledStockCheck && <span>falta de estoque</span>}
    </article>
  );
};

export default CatalogItem;
