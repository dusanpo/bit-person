import React from "react";

import ListView from "./view/ListView.jsx";

class ShowUsers extends React.Component{

constructor(props){
    super(props);
    console.log(props)
   
}


render(){

    console.log(this.props);
    return(
       <div className = "usersWrapper">
        <ListView users = {this.props.users}/>
       </div> 
    )
}



}

export default ShowUsers;