import React from "react";


export default function Main(props){
    return (
        <div className="container">
            <h1 className="main-text">Waste Saver.v8</h1>
            <form className="form" onSubmit={props.takeData}>
                <input type="text" name="recipeQuery" placeholder="Write the ingredients here!" className="main-input" onChange={props.setQuery} autoComplete="off"/>
                <button type="submit" className="main-btn">Find my Recipes!</button>
            </form>
        </div>
    )
}