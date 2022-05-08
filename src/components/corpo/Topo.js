import Acoes from "./Acoes";
import User from "./User";

export default function Topo (props){
    return (
        <div class ="topo">
            <User url = {props.url} user = {props.user} />
            <Acoes  />
        </div> 
    );
}