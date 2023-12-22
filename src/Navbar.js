import React from "react";
import { Link } from "react-router-dom";

const Navbar =() =>{
    return(
        <>
        <div> 
            <span><Link to='/' >Home </Link> </span>
            <span><Link to='about' >About </Link> </span>
        </div>
        </>
    );
}
export default Navbar;