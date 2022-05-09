export default function SugestaoText (props){
    return(
        <div class = "texto">
            <div class = "nome">{props.nomeSugestao}</div>
            <div class = "razao">{props.razaoSugestao}</div>
        </div>
    );
}