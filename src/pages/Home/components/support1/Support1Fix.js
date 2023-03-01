import React, { useEffect, useRef, useState } from "react";
import {Route,Routes} from "react-router-dom";

import Checks from "./problems/Checks";
import "./Support1Fix.css"
import Priority from "./problems/Priority";

function Support1Fix(){

    const [showSpinner, setShowSpinner] = useState(true);
    const spinnerRef = useRef(null);

    useEffect(() => {
        if (showSpinner) {
            setTimeout(() => {
                setShowSpinner(false);
            }, 500);
        }
    }, [showSpinner]);

    return (
        <>
            {showSpinner && (
                <div className="spinner" ref={spinnerRef}>
                    <div className="spinner-inner" />
                </div>
            )}
            {!showSpinner && (
                <div className="content">
                    <Routes>
                        <Route path="/home/check" element={<Checks />} />
                        <Route path='/home/priority' element={<Priority />} />
                    </Routes>
                </div>
            )}
        </>
    );
};

export default Support1Fix;