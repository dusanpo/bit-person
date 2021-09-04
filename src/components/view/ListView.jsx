import React from "react";

import "./ListView.css";

const ListView = ({users}) =>{

  const hideMail = (mail) => {
    let result = mail.split("@");
    result = `${result[0].slice(0,3)}...@${result[1]}`;
    return  result;
     }

     const capitalizeName = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
  }  

  const dateFormatter = (date)=>{
    
    let dateNew = new Date (date).toLocaleString();
    let result = dateNew.split(",")
    result = result[0];
    return result;

}

    return(
  <ul className = "collection spacing">
          {users.slice(0,10).map((post, index) =>(
            <li className="collection-item avatar" key = {index}>
                <img src={post.picture.thumbnail} alt="" className="circle"/>
                <span className="title">name: {capitalizeName(post.name.first)}</span>
                <p>email: {hideMail(post.email)} <br/>
                   date of birth: {dateFormatter(post.dob.date)}   
                </p>
            </li> 
        )
        )}   


  </ul>


    )


}
export default ListView;