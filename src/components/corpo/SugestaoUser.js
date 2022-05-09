import SugestaoText from "./SugestaoText";
export default function SugestaoUser(props){
    return (
        <div class = "usuario">
            <img src={props.imgSugestao}  />
            <SugestaoText  nomeSugestao = {props.nomeSugestao} razaoSugestao = {props.razaoSugestao}/>
        </div>
    );
}