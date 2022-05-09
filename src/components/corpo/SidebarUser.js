export default function SidebarUser (props){
    return (
        <div class="usuario">
            <img src={props.srcUser} />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.nickName}
            </div>
        </div>
    );
}