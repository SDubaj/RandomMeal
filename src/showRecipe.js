import React from 'react';
import CreateMeal from './ingredients';


function showRecipe (props){
   
    return(
    <div className="container">
        <h1>{props.data.strMeal}</h1>
        <hr/>
    <div className="row">    
        <div className="col-lg-5">   

        <img className="dinnerImg" src={props.data.strMealThumb} alt="mealImg" />

        </div>
        <div className="col-lg-7 ingredients">
        
            <h4>Ingredients:</h4>
            <CreateMeal data={props.data}/>

         </div>
         <div className="col-lg-12">
         <hr/>
            <h3>Instructions</h3>
            <p>{props.data.strInstructions}</p>

        </div>
    </div>
    <hr/>
    <h2>Video tutorial</h2>
    <div className="embed-responsive embed-responsive-21by9">
  <iframe className="embed-responsive-item" title = "video"src={`https://www.youtube.com/embed/${props.data.strYoutube.slice(-11)}`}> allowFullScreen></iframe>
</div>
    </div>
    )
}
export default showRecipe;