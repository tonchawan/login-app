const Main = (props) =>{
    return(
        <div>
            <h1>Welcome {props.username} </h1>
            <button onClick={props.handleLogout} >Logout</button>
        </div>
    )
}
export default Main