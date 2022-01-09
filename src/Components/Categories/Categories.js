import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://limitless-crag-38673.herokuapp.com/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, m: "auto", p: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {catagories.map((category) => (
            <Grid key={category._id} item xs={2} sm={4} md={4}>
              <Card onClick={() => navigate(`/products/${category.name}`)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {category.name}
                    </Typography>
                    <Button variant="outlined">See products</Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Categories;
