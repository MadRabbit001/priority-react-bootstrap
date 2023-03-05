import React, { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Support1Fix from "./components/support1/Support1Fix";
import "./Home.css";
// import Checks from "./components/support1/problems/Checks";


function Home(){

    const [content, setContent] = useState(null);

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

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
            <Header handleContentChange={handleContentChange} />
            {showSpinner && (
                <div className="spinner" ref={spinnerRef}>
                    <div className="spinner-inner" />
                </div>
            )}
            {!showSpinner && (
                <div className="content" dir={"rtl"}>
                    <Support1Fix content={content} />
                </div>
            )}
        </>
    );
}

export default Home;