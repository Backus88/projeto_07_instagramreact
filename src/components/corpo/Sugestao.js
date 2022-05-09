import SugestaoUser from "./SugestaoUser";
import Seguir from "./Seguir";

export default function Sugestao(props){
    return(
        <div class = "sugestao">
            <SugestaoUser  nomeSugestao = {props.nomeSugestao} razaoSugestao = {props.razaoSugestao} imgSugestao = {props.imgSugestao}/>
            <Seguir seguir = {props.seguir}  />
        </div>
    );

}