import React,{Fragment} from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
  }



render(){
 
return(
  <Fragment>
<Header/>
<Footer/>
</Fragment>
)


}

}


export default App;
