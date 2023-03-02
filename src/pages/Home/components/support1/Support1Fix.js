import React, { useEffect, useRef, useState } from "react";

import Checks from "./problems/Checks";
import "./Support1Fix.css"

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
                        <Checks/>
                </div>
            )}
        </>
    );
};

export default Support1Fix;