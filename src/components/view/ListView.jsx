import React from "react";

import "./ListView.css";

const ListView = ({users}) =>{

    return(
  <ul className = "colection">
          {users.slice(0,10).map((post, index) =>(
            <li className="collection-item avatar" key = {index}>
                <img src={post.picture.thumbnail} alt="" className="circle"/>
                <span className="title">name: {post.name.first}</span>
                <p>email: {post.email} <br/>
                   date of birth: {post.dob.date}   
                </p>
            </li> 
        )
        )}   


  </ul>


    )


}
export default ListView;