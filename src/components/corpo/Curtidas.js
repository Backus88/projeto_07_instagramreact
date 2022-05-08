import Texto from "./Texto";

export default function Curtidas(props){
   

    return(
        <div class = "curtidas">
            <img src={props.src}/>
            <Texto  curtiu = {props.curtiu} numero = {props.numero}/>
        </div>
    );
}