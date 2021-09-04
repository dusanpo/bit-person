import React from "react";

import "./ListView.css";

const ListView = ({users}) =>{

  const hideMail = (mail) => {
    let result = mail.split("@");
    result = `${result[0].slice(0,3)}...@${result[1]}`;
    return  result;
     }

    

    return(
  <ul className = "colection">
          {users.slice(0,10).map((post, index) =>(
            <li className="collection-item avatar" key = {index}>
                <img src={post.picture.thumbnail} alt="" className="circle"/>
                <span className="title">name: {post.name.first}</span>
                <p>email: {hideMail(post.email)} <br/>
                   date of birth: {post.dob.date}   
                </p>
            </li> 
        )
        )}   


  </ul>


    )


}
export default ListView;