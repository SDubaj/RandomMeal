import React, {Component} from 'react';
import './App.css';
import ShowRecipe from './showRecipe';
import Header from './Header';

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
  return (
    <div className="App">
      <Header/>
      <div className="title">
        <h1>
          Feeling hungry?
        </h1>
        
        <button className="btnMeal" onClick={this.handleClick}>Get a random meal!</button>
        </div>
      {this.state.isShow ? <ShowRecipe data={this.state.data[0]}/> : null }
    </div>
  );
}
}

export default App;
