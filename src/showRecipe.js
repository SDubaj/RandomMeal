import React from 'react';
import CreateMeal from './ingredients';


function showRecipe (props){
    console.log(`https://www.youtube.com/embed/${props.data.strYoutube.slice(-11)}`);
    return(
    <div className="container">
        <h1>{props.data.strMeal}</h1>
    <div className="row">    
        <div className="col-lg-5">        
            <img src={props.data.strMealThumb} alt="mealImg" />
            <h4>Ingredients:</h4>
            <CreateMeal data={props.data}/>
        </div>
        <div className="col-lg-7">
            <h3>Instructions</h3>
            <p>{props.data.strInstructions}</p>
         </div>
    </div>
    <h2>Video tutorial</h2>
    <div className="embed-responsive embed-responsive-21by9">
  <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.data.strYoutube.slice(-11)}`}> allowFullScreen></iframe>
</div>
    </div>
    )
}
export default showRecipe;