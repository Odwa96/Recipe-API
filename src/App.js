import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';


function App() {

    const APP_ID = "0d8b2d15"
    const APP_KEY = "7fca75a926b746250e0d829a8164d0eb"

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken')
    
    //the usEffect only run when submitting the form
    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
      //Api string
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
        setRecipes(data.hits) 
    }

    const updateSearch = e => {
      setSearch(e.target.value) 
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
    }
 
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
         <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
        />
      ))};
      </div>
    </div>
  );
}

export default App;
