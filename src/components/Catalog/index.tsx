import React, { useEffect, useState } from "react";
import { IProduct } from "../../store/modules/cart/types";
import api from "../../services/api";
import CatalogItem from "../CatalogItem";
import logo from "./capa.png";
// import { Container } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <img alt="Pães" src={logo} />
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
