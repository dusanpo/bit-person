import React from "react";

import ListView from "./view/ListView.jsx";
import { GridView } from "./view/GridView.jsx";

class ShowUsers extends React.Component{

constructor(props){
    super(props);
    console.log(props)
   
}


render(){

    console.log(this.props);
    return(
       <div className = "usersWrapper">
         {
                 this.props.isListView
                ? <ListView users = {this.props.users} />
                : <GridView users = {this.props.users}/>
             }
       </div> 
    )
}



}

export default ShowUsers;