import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcons from "../../Common/Shared/SocialIcons/SocialIcons";
import ProductModal from "../../ProductModal/ProductModal";

const Product = ({ product, fromComponent }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { src, Brand, name, price, colour, ratings, reviews } = product;

  return (
    <Grid item md={3}>
      <Card>
        <CardMedia component="img" height="140" image={src} alt="image" />
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>

          {/* category & brand */}
          {fromComponent === "homeCategory" || (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Colour: {colour}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                Brand: {Brand}
              </Typography>
            </Box>
          )}

          {/* price */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: 2 }}
            gutterBottom
          >
            $ {price}
          </Typography>

          {/* rating & reviews */}
          {fromComponent === "homeCategory" || (
            <Box sx={{ display: "flex", mb: 2 }}>
              <Rating readOnly value={parseInt(ratings)} />
              <Typography
                component="span"
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                (reviews: {reviews})
              </Typography>
            </Box>
          )}

          {fromComponent === "homeCategory" || (
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
          )}
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} fullWidth variant="contained">
            Purchase
          </Button>
        </CardActions>
      </Card>
      <ProductModal open={open} product={product} handleClose={handleClose} />
    </Grid>
  );
};

export default Product;
