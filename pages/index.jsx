import { Box, Button } from "@mui/material";
import Head from "next/head";
import Banner from "../components/home/Banner";
export default function Home() {
  return (
    <Box>
      <Head>
        <title>Pulse | Boost Your Sales</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero consectetur ipsa quis nisi beatae. Quod!"
        />
      </Head>
      <Banner />
    </Box>
  );
}
