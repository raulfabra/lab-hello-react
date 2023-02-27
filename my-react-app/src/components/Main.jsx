import React from "react";
import ih from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';


function Main() {
    return (
        <div className="App-header">
            <header className="App-img">
                <img className ="" src={ih} alt="ih"/>
                <img className = "menuu" src={menu} alt="menu" />
            </header>
            <h1 className="texto">Say Hello to ReactJS</h1>
            <h2 className="texto">You will learn how to use the most popular fronted library, and become a super Ninja developer</h2>
            <p className="awesome">Awesome!</p>
        </div>
    )
}

export default Main;
