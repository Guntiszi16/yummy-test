import React from "react";
import { Box, Paper } from "@mui/material";

import "./FavoriteDetail.css";

export default function FavoriteDetail({ recipe }) {
  return (
    <div className="favorite_item_container">
      <Box
        sx={{
          display: "flex",
          m: 1,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box className="item_content_container">
            <Box className="item_content">
              <p className="item_name">{recipe.strMeal}</p>
              <p>
                <span>Category: </span>
                {recipe.strCategory}
              </p>
            </Box>
            <img src={recipe.strMealThumb} alt={recipe.strTags} />
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
