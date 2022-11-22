import { renderIntoDocument } from "react-dom/test-utils"

const Login = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" name ="username" placeholder = "username" onChange = {props.handleChange }/>
            <input type= "password" name ="password" placeholder="password" onChange = {props.handleChange }/>
            <input type="submit" value = "Submit" />
        </form>

    )
}

export default Login