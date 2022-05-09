import Titulo from "./Titulo";
import Sugestao from "./Sugestao";
export default function Sugestoes(){
    const itens = [{ nomeSugestao:"bad.vibes.memes" , imgSugestao: "assets/img/bad.vibes.memes.svg",razaoSugestao: "Segue você"},
                           {nomeSugestao:"chibirdart" , imgSugestao: "assets/img/chibirdart.svg",razaoSugestao: "Segue você"},
                           {nomeSugestao:"razoesparaacreditar" , imgSugestao: "assets/img/razoesparaacreditar.svg",razaoSugestao: "Novo no Instagram"},
                           {nomeSugestao:"adorable_animals" , imgSugestao: "assets/img/adorable_animals.svg",razaoSugestao: "Segue você"},
                           {nomeSugestao:"smallcutecats" , imgSugestao: "assets/img/smallcutecats.svg", razaoSugestao: "Segue você"},
];
    const seguir = "Seguir";
    const titulos = {titulo: "Sugestões para você", corpoTitulo: "Ver tudo"};
    return(
        <div class = "sugestoes">
            <Titulo titulo = {titulos.titulo} corpoTitulo = {titulos.corpoTitulo} />
            {itens.map(item => <Sugestao nomeSugestao = {item.nomeSugestao} razaoSugestao = {item.razaoSugestao} imgSugestao = {item.imgSugestao} seguir = {seguir}/>)}
        </div>
    )
}