import Ion from "../Ion";

export default function FundoMobile (){

    const ions = ["home","search-outline","add-circle-outline","heart-outline","person-outline"];

    return (
    <div class="fundo-mobile">
        {ions.map( item => <Ion nome = {item}/>)} 
    </div>
    );
}