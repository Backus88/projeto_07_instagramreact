import Actions from "./Actions";
import Curtidas from "./Curtidas";

export default function Fundo(props){
    return (
        <div class = "fundo">
            <Actions />
            <Curtidas curtiu = {props.curtiu} numero = {props.numero} src = {props.src} />
        </div>
    );
}