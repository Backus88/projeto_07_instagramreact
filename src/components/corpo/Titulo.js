export default function Titulo (props){
    
    return (
        <div class="titulo">
            {props.titulo}
            <div>{props.corpoTitulo}</div>
        </div>
    );
}