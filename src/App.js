import React, {Component} from 'react';
import './App.css';
import ShowRecipe from './showRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    // Nie wywołuj tutaj this.setState()!
    this.state = { 
      data:[] ,
      isShow:false
    };
    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(response => response.json())
      .then(response => this.setState({ data: response.meals, isShow:true})
      
      );
  }
  saySomething(something) {
    console.log(something);
}

  render(){
    console.log(this.state.data);
  return (
    <div className="App">
      <div className="title">
        <h1>
          Feeling hungry?
        </h1>
        <h4>
          Get a random meal !
        </h4>
        <button onClick={this.handleClick}>Get Meal!</button>
        </div>
      {this.state.isShow ? <ShowRecipe data={this.state.data[0]}/> : null }
    </div>
  );
}
}

export default App;
