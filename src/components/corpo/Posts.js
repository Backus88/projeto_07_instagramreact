import Post from "./Post";

export default function Posts (){
    const itens = [
        {user: "meowed", url: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", src: "assets/img/respondeai.svg", curtiu: "respondeai", numero : "outras 101.523 pessoas"},
        {user: "barked", url: "assets/img/barked.svg", img : "assets/img/dog.svg",src: "assets/img/adorable_animals.svg", curtiu: "adorable_animals", numero: "outras 99.159 pessoas"}
    ];

    return(
        <div class = "posts">
            {itens.map(item => <Post  user = {item.user} url = {item.url} img = {item.img} src = {item.src} curtiu = {item.curtiu} numero = {item.numero} /> )}
        </div>
    );
}