import React, { useEffect, useState } from "react";
import { IProduct } from "../../store/modules/cart/types";
import api from "../../services/api";
import CatalogItem from "../CatalogItem";

import "./style.sass";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <div id="containerProdutos">
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
      </div>
    </main>
  );
};

export default Catalog;
