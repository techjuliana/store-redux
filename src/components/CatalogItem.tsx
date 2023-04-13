import React, { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";

// import { Container } from './styles';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const addCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      <strong>{product.price}</strong>
      <button type="button" onClick={addCart}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
