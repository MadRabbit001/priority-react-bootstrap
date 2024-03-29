import React from "react";
import MenuSection from "./nav/MenuSection";
import MenuSection2 from "./nav/MenuSection2";
import MenuSection3 from "./nav/MenuSection3";
import MenuSection4 from "./nav/MenuSection4";

function Header({ handleContentChange }){
    return(<nav className="navbar navbar-expand-lg bg-info-subtle" style={{height: 8 + "vh"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="src/pages#" style={{fontWeight: "bold" , marginBottom:1 + "vh"}}>Priority</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"#cff4fc"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{flexDirection:"row"}}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="src/pages#" style={{padding: 10 + "px" , backgroundColor:"#cff4fc"}}>Chat</a>
                    </li>
                    <MenuSection
                        handleContentChange={handleContentChange}
                    />
                    <MenuSection2/>
                    <MenuSection3/>
                    <MenuSection4/>


                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit" style={{backgroundColor: "#cff4fc"}}>Search</button>
                </form>
            </div>
        </div>
    </nav>);
}

export default Header;