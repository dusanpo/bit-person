import React from "react";

import ListView from "./view/ListView.jsx";

class ShowUsers extends React.Component{

constructor(props){
    super(props);

    this.state = {
        users:[]
    };
}

getUsersList=()=>{
    fetch("https://randomuser.me/api/?results=15").then(res =>{
   return res.json();

    }).then(response =>{
        
        this.setState({
          users: response.results
        });
    })
  

}

componentDidMount(){
    this.getUsersList();
   
}

render(){


    return(
       <div className = "usersWrapper">
        <ListView users = {this.state.users}/>
       </div> 
    )
}



}

export default ShowUsers;