import Ion from "../Ion";

export default function ActionsIcons (){
    const itens = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    return(
        <div>
             {itens.map(item => <Ion  nome = {item}   />)}
        </div>
    );

}