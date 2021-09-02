import React,{Fragment} from "react";

import Header from "./components/partials/Header.jsx";
import Footer from "./components/partials/Footer.jsx";

import ShowUsers from "./components/ShowUsers.jsx";


import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
  }



render(){
 
return(
  <Fragment>
<Header/>
<ShowUsers/>
<Footer/>
</Fragment>
)


}

}


export default App;
