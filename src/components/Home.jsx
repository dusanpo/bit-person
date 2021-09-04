import React,{Fragment} from "react";

import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";

import ShowUsers from "./ShowUsers.jsx";

import Search from "./Search.jsx";


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isListView:true,
      users:[],
      query: ''
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
componentDidUpdate(prevProps, prevState){
  if(this.state.query !== prevState.query){

    fetch("https://randomuser.me/api/?results=15")
      .then(res =>{return res.json();})    
      .then(response =>{
        console.log(response);
        this.setState({users: response.results})})
  }

}


render(){

 const filteredUsers = this.state.users.filter(item => item.name.first.toLowerCase().includes(this.state.query.toLowerCase()));

 
return(
  <Fragment>
<Header isListView = {this.state.isListView} onLayoutToggle = {this.onLayoutToggle} onRefresh = {this.onRefresh} />
<Search search={(q)=>this.setState(q)} query={this.state.query}/>
<ShowUsers isListView = {this.state.isListView} users={filteredUsers}/>
<Footer/>
</Fragment>
)


}

}


export default Home;