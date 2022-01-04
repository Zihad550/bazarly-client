import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../Common/Shared/Header/HeaderContainer/HeaderContainer";
import AddressModal from "../AddressModal/AddressModal";
import ContactModal from "../ContactModal/ContactModal";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  /* contact model handlers and state */
  const [openContactModal, setOpenContactModal] = useState(false);
  const handleContactModalOpen = () => setOpenContactModal(true);
  const handleContactModalClose = () => setOpenContactModal(false);

  /* address model handlers and state */
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const handleAddressModalOpen = () => setOpenAddressModal(true);
  const handleAddressModalClose = () => setOpenAddressModal(false);

  const [fieldData, setFieldData] = useState({});

  const handleFieldData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newData = { ...fieldData };
    newData[field] = value;
    setFieldData(newData);
  };
  console.log(fieldData);
  return (
    <>
      <HeaderContainer />
      <Container maxWidth="xl">
        <Paper elevation={4} sx={{ display: "flex", py: 3, my: 3 }}>
          <Typography variant="h5" sx={{ ml: 3 }}>
            Old user login{" "}
          </Typography>{" "}
          <Button variant="contained" sx={{ ml: 1 }}>
            Login
          </Button>
        </Paper>
        <Grid container spacing={{ md: 2, xs: 1 }}>
          <Grid item md={6}>
            {/* contact number */}
            <Paper elevation={4} sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5">Contact Number</Typography>
                <Button onClick={handleContactModalOpen}>Add number</Button>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h5">{fieldData.contactTitle}</Typography>
                <Typography variant="h5">{fieldData.contactNumber}</Typography>
              </Box>
            </Paper>
            {/* Delivery Address */}
            <Paper elevation={4} sx={{ p: 3, my: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5">Delivery Address</Typography>
                <Button onClick={handleAddressModalOpen}>Add Address</Button>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h5">{fieldData.addressTitle}</Typography>
                <Typography variant="h6">{fieldData.address}</Typography>
              </Box>
            </Paper>
            {/* Payment option */}
            <Paper elevation={4} sx={{ p: 3, my: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5">Payment Option</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              ></Box>
            </Paper>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
      <ContactModal
        handleClose={handleContactModalClose}
        openContactModal={openContactModal}
        handleFieldData={handleFieldData}
      />
      <AddressModal
        handleClose={handleAddressModalClose}
        openAddressModal={openAddressModal}
        handleFieldData={handleFieldData}
      />
    </>
  );
};

export default CheckoutContainer;
