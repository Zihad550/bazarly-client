import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Cart from "../Cart/Cart";
import CartProduct from "../CartProduct/CartProduct";

const CartContainer = () => {
  const { user } = useAuth();
  // useNavigate hook
  const navigate = useNavigate();
  /* states */
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveQuantity = () => {
    if (quantity === 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = (id) => {
    fetch(`https://limitless-crag-38673.herokuapp.com/cart?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        data.deletedCount > 0 && setIsDeleted(true);
        alert("successfully deleted");
      });
  };
  useEffect(() => {
    setIsDeleted(false);
    fetch(
      `https://limitless-crag-38673.herokuapp.com/cart/product?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isDeleted]);
  return (
    <>
      {/* main cart */}
      <Container sx={{ my: 3 }} maxWidth="xl">
        <Grid container spacing={{ xs: 1, md: 2 }}>
          {/* products */}
          <Grid item md={8} xs={12}>
            {/* cart title */}
            <Grid
              container
              sx={{
                borderBottom: "1px solid gray",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Grid item md={6}>
                <Typography variant="h5">Product</Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Price
                </Typography>
              </Grid>
              {/* <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Quantity
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Subtotal
                </Typography>
              </Grid> */}
              <Grid item md={2}>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Cancel
                </Typography>
              </Grid>
            </Grid>
            {/*============
           product
           ============= */}

            {products.map((product) => (
              <CartProduct
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </Grid>

          {/*=========== 
          cart
          ================ */}
          <Cart />
        </Grid>
      </Container>
    </>
  );
};

export default CartContainer;
