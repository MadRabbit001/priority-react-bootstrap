import React, { useState } from "react";
import "./Footer.css"

function Footer(){
    const [year,setYear] = useState(new Date().getFullYear());

    function updateYear(){
        setYear(new Date().getFullYear());
    }
    setInterval(updateYear,604800);

    return(
        <footer>MadRabbit © {year}</footer>
    );
}

export default Footer;