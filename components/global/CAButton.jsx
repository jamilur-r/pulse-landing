import { Button } from "@mui/material";
import React from "react";

const CAButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        px: 4,
        py: 2,
        fontSize: "1.1rem",
        textTransform: "capitalize",
        fontWeight: 800,
      }}
    >
      {children}
    </Button>
  );
};

export default CAButton;
