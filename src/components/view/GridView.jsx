import React from "react";




export const GridView = ({users}) =>{

    const hideMail = (mail) => {
        let result = mail.split("@");
        result = `${result[0].slice(0,3)}...@${result[1]}`;
        return  result;
         }
     
     const formatDate = (date) =>{
         let formated = `${date.slice(8,10)}.${date.slice(5,7)}.${date.slice(0,4)}.`
         return formated;
     }
     
     
      return(
            <div className = "container row gridView" id = "view">
              
             {users.slice(0,9).map( (post,index) =>(
         
        
     <div className = "col s4" key = {index} >
             <div className = "card" >
             <div className = "card-image">
     <img  src = {post.picture.large} alt = "portrait"></img>
     <span className = "card-title">{post.name.first}</span>
     </div>
     <div className = "card-content">
          <p>email: {hideMail(post.email)};</p>
          <p>date of birth: {formatDate(post.dob.date)};</p>
     </div>  
        
     
     
     </div>
     </div>
     
     
             ))}
            
          </div>
         )


}

