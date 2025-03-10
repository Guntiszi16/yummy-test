import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./SearchForm.css";

export default function SearchForm({ setUserInput }) {
  return (
    <div className="form_container">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your recipe"
          id="demo-helper-text-misaligned"
          label="Recipe"
          onChange={(e) => setUserInput(e.target.value)}
        />
      </Box>
    </div>
  );
}
