import React from "react";
import Greeting from "../styled-component/GreetStyled";

function Greet(){
    let greeting = "";
    let time = new Date().getHours();

    if (time > 5 && time <= 12) {
        greeting = "Good Morning!";
    }
    else if (time > 12 && time <=16) {
        greeting = "Have a Perfect Noon!";
    }
    else if (time > 16 && time <= 20) {
        greeting = "Have a Perfect AfterNoon!";
    }
    else if (time > 20 && time <= 24) {
        greeting = "Good Evening Boss!";
    }
    else if (time > 0 && time <= 5) {
        greeting = "Why the FUCK you awake?!";
    }

    return <Greeting>{greeting}</Greeting>
}

export default Greet;
