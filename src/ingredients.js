import React from 'react';

function CreateMeal (props) {
const ingredients = [];
for(let i = 1; i <=20; i ++){
    if(props.data[`strIngredient${i}`]) {
        ingredients.push(`${props.data[`strIngredient${i}`]} - ${props.data[`strMeasure${i}`]}`)
    } else {
        // Stop if no more ingredients
        break;
    }
}
console.log(ingredients);
const showIngredients = ingredients.map((item) => <li key={item}> {item}</li>)
return (
<ul>{showIngredients}</ul>
)
}
export default CreateMeal;