import React,{Fragment} from "react";

import Header from "./components/partials/Header.jsx";
import Footer from "./components/partials/Footer.jsx";

import ShowUsers from "./components/ShowUsers.jsx";


import './App.css';
import Search from "./components/Search.jsx";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isListView:true,
      users:[]
  }
  this.onRefresh = this.onRefresh.bind(this);
  }

  onLayoutToggle = () => {
    this.setState({
    isListView: !this.state.isListView
    })  
  }

  getUsersList=()=>{
    fetch("https://randomuser.me/api/?results=15")
    .then(res =>{return res.json();})    
    .then(response =>{
      console.log(response);
      this.setState({users: response.results})})
  

}
onRefresh(){
  this.getUsersList();
 
}

componentDidMount(){
    this.getUsersList();
   
}


render(){
 
return(
  <Fragment>
<Header isListView = {this.state.isListView} onLayoutToggle = {this.onLayoutToggle} onRefresh = {this.onRefresh} />
<Search/>
<ShowUsers isListView = {this.state.isListView} users={this.state.users}/>
<Footer/>
</Fragment>
)


}

}


export default App;
