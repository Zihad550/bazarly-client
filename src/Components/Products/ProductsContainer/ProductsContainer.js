import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductsContainer = () => {
  const { category } = useParams();
  console.log(category);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch(
      `https://limitless-crag-38673.herokuapp.com/products?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
  console.log(products);
  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={{ md: 2, xs: 1 }}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsContainer;
