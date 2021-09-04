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
      users:[]
  }
  }

  getUsersList=()=>{
    fetch("https://randomuser.me/api/?results=15")
    .then(res =>{return res.json();})    
    .then(response =>{
      console.log(response);
      this.setState({users: response.results})})
  

}

componentDidMount(){
    this.getUsersList();
   
}


render(){
 
return(
  <Fragment>
<Header/>
<Search/>
<ShowUsers users={this.state.users}/>
<Footer/>
</Fragment>
)


}

}


export default App;
