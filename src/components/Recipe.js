import React from "react";

export default function Recipe(props){
    const unlist = (props.recipeIngs).map(item => {
        return <li>{item}</li>
    })
    
    return (
        <article className="card">
            <img src={props.recipeImg} alt="" className="card-img"/>
            <div className="card_content">
                <span className="card_title"><a href={props.recipeLink} target="blank_">{props.recipeName}</a></span>
                    <p className="card_description">
                        <ul className="unlist">
                            {unlist}
                        </ul>
                    </p>
                
            </div>
        </article>
    )
}