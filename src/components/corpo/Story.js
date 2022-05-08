import Imagem from "./Imagem";
import Usuario from "./Usuario";

export default function Story (props) {
    return (
        <div class = "story">
            <Imagem  src = {props.image} />
            <Usuario  usuario = {props.usuario} />
        </div>
    );
}