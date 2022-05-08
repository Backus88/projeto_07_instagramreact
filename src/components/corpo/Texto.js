export default function (props){
    return (
        <div class = "texto">
            Curtido por <strong> {props.nome}</strong>
            e
            <strong> outras {props.numero} pessoas</strong>
        </div>
    );

}