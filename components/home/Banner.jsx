import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CAButton from "../global/CAButton";

const Banner = () => {
  return (
    <Container maxWidth="lg">
      <Box boxSizing="border-box" px={2} py={2}>
        <Stack
          spacing={4}
          alignItems="center"
          justifyContent="center"
          width="100%"
          sx={{ height: "auto", minHeight: "80vh" }}
        >
          <Typography
            variant="h1"
            fontWeight="800"
            textAlign="center"
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Marketplace Insights Made Simple
          </Typography>
          <Typography
            fontSize="1.2rem"
            fontWeight="500"
            textAlign="center"
            sx={{ maxWidth: "75%" }}
          >
            Top performing brands use &#8216;Pulse&#8217; to extract key trends
            & insights to make smart decisions to increase market share &
            revenue.
          </Typography>
          <Stack alignItems="center" justifyContent="center" spacing={2}>
            <CAButton variant="contained">Start 7 Days Free</CAButton>
            <Typography
              fontSize="1.1rem"
              fontWeight="600"
              variant="body2"
              letterSpacing={0.5}
              color="#0057fc"
            >
              No commitment required
            </Typography>
          </Stack>
        </Stack>
        <Box
          mt={3}
          component="img"
          src="/assets/images/pulse-banner.png"
          width="100%"
          borderRadius={3}
        />
      </Box>
    </Container>
  );
};

export default Banner;
