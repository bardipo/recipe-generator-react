import './App.css';
import Main from "./components/Main";
import React from "react";
import Recipe from './components/Recipe';

function App() {
  
  const appId = '37b291a9';
  const appKey = '6d643e5441579bba8e39451a2ec34d79';
  const [foodQuery, setFoodQuery] = React.useState("");
  const [foodList, setFoodList] = React.useState([]);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [tempFoodList, setTempFoodList] = React.useState([]);

  function handleChange(event){
      setFoodQuery(event.target.value);
      console.log(foodQuery);
  }

  
  const printRecipes = foodList === [] ? "" : (foodList.slice(0,9)).map(item => {
    return <Recipe recipeName= {item.recipe.label} recipeImg= {item.recipe.image} recipeIngs= {item.recipe.ingredientLines} recipeLink= {item.recipe.shareAs} />
  })
 
  

  function handleClick(event){
    setIsSubmit(true)
    event.preventDefault();

    const endpointUrl = `https://api.edamam.com/search?q=${foodQuery}&app_id=${appId}&app_key=${appKey}`;

    fetch(endpointUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.hits);
      setFoodList(data.hits);
    })
    .catch(error => console.error(error));
  }
  



  return (
    <div className="App">
        <Main
          setQuery= {handleChange}
          takeData= {handleClick}      
        />
        <div className={`recipes ${foodList === [] ? "active" : ""}`}>
          {printRecipes}
        </div>
    </div>
  );
}

export default App;
