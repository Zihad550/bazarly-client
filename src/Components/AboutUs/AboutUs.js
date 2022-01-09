import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const developers = [
    {
      id: "1",
      src: "https://i.ibb.co/Hdj73qj/profile.png",
      name: "Jehad Hossain",
      role: "Tech Lead",
    },
    {
      id: "2",
      src: "https://i.ibb.co/ydmjsCy/arif-1-removebg-preview.png",
      name: "Ariful Islam",
      role: "Fullstack Developer",
    },
    {
      id: "3",
      src: "https://i.ibb.co/Pwr3vWf/zonayet-1-removebg-preview.png",
      name: "Zonaet Hossain Munna",
      role: "Fullstack Developer",
    },
  ];
  return (
    <Container>
      <Grid container spacing={2} style={{ marginBottom: "30px" }}>
        <Grid item xs={8} md={12}>
          <Typography variant="h3" sx={{ textAlign: "center", my: 3 }}>
            About us
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography sx={{}} variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptas voluptate doloremque inventore dolorum totam in, labore
                quisquam rerum. Officia voluptatem perspiciatis placeat, sunt,
                et voluptatum adipisci ipsam accusamus molestias laudantium
                nesciunt qui necessitatibus dolore asperiores delectus amet
                rerum est, aspernatur id magnam ab ullam dolores. Neque odio
                saepe laborumEaque voluptas voluptate doloremque inventore
                dolorum totam in, labore quisquam rerum. Officia voluptatem
                perspiciatis placeat, sunt, et voluptatum adipisci ipsam
                accusamus molestias laudantium nesciunt qui necessitatibus
                dolore asperiores delectus amet rerum est, aspernatur?
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://i.ibb.co/5vXM80H/about-us.jpg"
                sx={{ borderLeft: 1 }}
                style={{ marginTop: "20px" }}
                width="400px"
                height="400px"
                alt=""
              />
            </Grid>
            {/* developers */}
            <Grid container>
              {developers.map((developer) => (
                <Grid key={developer.id} item xs={12} sm={6} md={4}>
                  <img
                    src={developer.src}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
