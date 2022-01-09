import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import banner from "../../../images/product-banner.png";
import Product from "../../Products/Product/Product";

const HomeCatagorySection = () => {
  const [shoes, setShoes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://limitless-crag-38673.herokuapp.com/products?category=shoe")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);
  return (
    <>
      <Container sx={{ mb: 5 }} maxWidth="xl">
        {/*================
       category names
       ============== */}
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }} variant="h2">
            Shoes
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 1, md: 5 }}>
          <Grid item sm={12} md={4} lg={4}>
            <img style={{ height: "100%" }} src={banner} alt="" />
          </Grid>
          <Grid item sm={12} md={8} lg={8}>
            <Grid container spacing={{ md: 2, xs: 1 }}>
              {shoes.map((shoe) => (
                <Product key={shoe._id} product={shoe} from="homeCategory" />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeCatagorySection;
