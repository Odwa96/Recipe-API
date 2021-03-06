import React from 'react';
import style from '../recipe.module.css'

function Recipe({image, title, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe;
