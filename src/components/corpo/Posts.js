import Post from "./Post";

export default function Posts (){
    const itens = [
        {user: "meowed", url: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", src: "assets/img/respondeai.svg", curtiu: "respondeai", numero : "101.523"},
        {user: "barked", url: "assets/img/barked.svg", img : "assets/img/dog.svg",src: "assets/img/adorable_animals.svg", curtiu: "adorable_animals", numero: "99.159 "}
    ];

    return(
        <div class = "posts">
            {itens.map(item => <Post  user = {item.user} url = {item.url} img = {item.img} src = {item.src} curtiu = {item.curtiu} numero = {item.numero} /> )}
        </div>
    );
}