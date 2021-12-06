
import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/CardList';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
      return response.json()
    }).then(users=>this.setState({monsters:users}))
  }

  render(){

    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );


    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1> 
        <input type="search" placeholder="search monster" onChange={e=>{
          this.setState({searchfield: e.target.value},()=>console.log(filteredMonsters))
          
        }} />
        <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
  
}

export default App;
