import React from "react";

import FavoriteDetail from "../components/FavoriteDetail";

import "./Favorite.css";

export default function Favorite({ favorite }) {
  const mappedFavorites = favorite.map((recipe) => (
    <FavoriteDetail key={recipe.idMeal} recipe={recipe} />
  ));

  return (
    <div className="favorite_container">
      <h1>Favorite Recipes</h1>
      {favorite.length === 0 ? (
        <div className="favorite_no_results">
          <p>No recipes have been added yet.</p>
        </div>
      ) : (
        mappedFavorites
      )}
    </div>
  );
}
