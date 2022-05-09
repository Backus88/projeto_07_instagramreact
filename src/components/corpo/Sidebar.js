import SidebarUser from "./SidebarUser";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copyright from "./Copyright";


export default function Sidebar (){
    const itens = [{srcUser: "assets/img/catanacomics.svg", userName: "catanacomics", nickName: "Catana"}]
    const copyright = " © 2021 INSTAGRAM DO FACEBOOK";
    const linkks = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma";
    

    return (
        <div class = "sidebar">
            {itens.map( item => <SidebarUser srcUser= {item.srcUser} userName = {item.userName} nickName = {item.nickName} />) }
            <Sugestoes />
            <Links links = {linkks} />
            <Copyright copy = {copyright} />
        </div>
    );
}