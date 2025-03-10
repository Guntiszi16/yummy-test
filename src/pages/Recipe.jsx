import React, { useState, useEffect } from "react";

import { CircularProgress } from "@mui/material";
import axios from "axios";

import SearchForm from "../components/SearchForm";
import RecipeItem from "../components/RecipeItem";

import "./Recipe.css";

export default function Recipe({ setFavorite, favorite }) {
  const [recipeList, setRecipeList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const recipeUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  useEffect(() => {
    axios
      .get(recipeUrl)
      .then((res) => {
        setRecipeList(res.data.meals);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [recipeUrl]);

  let mappedRecipes =
    recipeList !== null ? (
      recipeList.map((recipeItem) => (
        <RecipeItem
          key={recipeItem.idMeal}
          recipeItem={recipeItem}
          setFavorite={setFavorite}
          favorite={favorite}
        />
      ))
    ) : (
      <div className="no_results">
        <p>No recipes found.</p>
      </div>
    );

  if (isLoading) {
    return <CircularProgress />;
  } else {
    return (
      <div className="recipe_container">
        <div className="user_search">
          <SearchForm setUserInput={setUserInput} userInput={userInput} />
        </div>
        <div className="recipe_list_container">{mappedRecipes}</div>
      </div>
    );
  }
}
