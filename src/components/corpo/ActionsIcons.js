import Ion from "../Ion";
import React from "react";

export default function ActionsIcons (){
   
    const itens = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    const [heart, setHeart]= React.useState("heart-outline");
    const chat = "chatbubble-outline";
    const paper = "paper-plane-outline";

    function curtida (){
        console.log("aki")
        if (heart === "heart-outline"){
            setHeart("heart")
        }else{
            setHeart("heart-outline");
        }
    }

    return(
        <div >
            <ion-icon name={heart} role = "button" onClick = {curtida} ></ion-icon> 
             <Ion nome = {chat} />
             <Ion nome = {paper} />
        </div>
    );

}