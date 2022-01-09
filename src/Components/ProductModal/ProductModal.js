import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../Common/Shared/SocialIcons/SocialIcons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ open, handleClose, product }) {
  const [added, setAdded] = React.useState(false);
  // navigate function
  const navigate = useNavigate();
  const { src, Brand, name, price, colour, ratings, reviews, category, _id } =
    product;

  const handleAddToCart = () => {
    console.log("inside add to cart");
    fetch(`https://limitless-crag-38673.herokuapp.com/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.insertedId && setAdded(true);
      });
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item md={6}>
              <img style={{ width: "100%", height: "auto" }} src={src} alt="" />
            </Grid>
            <Grid item md={6}>
              <Card>
                <CardContent sx={{ pb: 0 }}>
                  <Typography variant="h5" gutterBottom>
                    {name}
                  </Typography>

                  {/* category & brand */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      Category Name: {category}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      Brand: {Brand}
                    </Typography>
                  </Box>

                  {/* price */}
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mt: 2 }}
                    gutterBottom
                  >
                    $ {price}
                  </Typography>

                  {/* rating & reviews */}
                  <Box sx={{ display: "flex", mb: 2 }}>
                    <Rating readOnly value={ratings} />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      gutterBottom
                    >
                      ({reviews} Reviews)
                    </Typography>
                  </Box>

                  {/* about product */}
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci repudiandae illo aliquam accusamus. Est natus
                    dolores, id impedit accusantium, minus debitis facere
                    officiis, voluptate inventore soluta. Quis placeat excepturi
                    possimus.
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <SocialIcons />
                    <Box
                      sx={{
                        display: "flex",
                        borderLeft: "2px solid gray",
                      }}
                    >
                      <Box className="primary-hover-effect">
                        <IconButton className="primary-hover-effect">
                          <ScaleOutlinedIcon fontSize="normal" />
                        </IconButton>
                      </Box>
                      <Box className="primary-hover-effect">
                        <IconButton className="primary-hover-effect">
                          <FavoriteBorderIcon fontSize="normal" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={handleAddToCart}
                    fullWidth
                    variant="contained"
                  >
                    ADD TO CART
                  </Button>
                </CardActions>
                {/* alert if the product is added on cart */}
                {added && (
                  <Alert severity="success">Successfully added to cart</Alert>
                )}
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
