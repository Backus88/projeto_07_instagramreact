import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Fundo from "./Fundo";

export default function Post (props){
    return(
        <div class = "post">
            <Topo user = {props.user} url = {props.url} />
            <Conteudo img = {props.img} />
            <Fundo curtiu = {props.curtiu} numero = {props.numero} src = {props.src}/>
        </div>
    );

}