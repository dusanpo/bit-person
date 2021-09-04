import React, {Fragment} from "react";

import Header from "../components/partials/Header.jsx";
import AboutContent from "./AboutContent.jsx";
import Footer from "../components/partials/Footer.jsx";


const About = (props) =>{
    return(
        <Fragment>
           <Header/>
           <AboutContent title = {props.match.params.title}/>
           <Footer/>
        </Fragment>
    )

}

export default About;