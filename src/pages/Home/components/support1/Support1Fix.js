import React, { useEffect, useRef, useState } from "react";

import Checks from "./problems/Checks";
import "./Support1Fix.css"
import {Route, Routes} from "react-router-dom";
import Priority from "./problems/Priority";
import BackOffice from "./problems/BackOffice";

function Support1Fix({ content }){



    return (
        <>
            {content==="צ'קים" && <Checks/> }
            {content==='מק"טים' && <Priority/>}
            {content==="משרד אחורי" && <BackOffice/>}
        </>
    );
};

export default Support1Fix;