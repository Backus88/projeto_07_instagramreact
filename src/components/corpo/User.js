export default function User (props){
    return(
        <div class = "usuario">
            <img src={props.url}  />
            {props.user}
        </div>
    );
}