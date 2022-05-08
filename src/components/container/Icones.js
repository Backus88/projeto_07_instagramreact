import Ion from "../Ion";
export default function Icones(){
    const itens =["paper-plane-outline","compass-outline","heart-outline","person-outline"];
    return(
       <div>
           {itens.map( item => <Ion nome = {item}/>)}
       </div>
    );
}