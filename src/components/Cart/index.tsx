import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

// import { Container } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  return (
    <table>
      <h1>Caixa</h1>
      <h5>Leve seu pedido ao caixa</h5>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
             <img alt="Produto" src={item.product.imagem} />
            <td>{item.product.title}</td>
            <td>R$: {item.product.price} unid</td>
            <td>Qtd: {item.quantity} </td>
            <td>Total R$: {(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
