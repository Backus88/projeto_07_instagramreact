export default function Texto(props){
    return (
        <div class = "texto">
            Curtido por <strong> {props.curtiu} </strong> e
            <strong> outras {props.numero} pessoas</strong>
        </div>
    );

}