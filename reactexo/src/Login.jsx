const Login = (props) => {
    return (
        <div>
            <h2>Connexion</h2>
            <button onClick={() => props.login()}>se connecter</button>
        </div>
    )
}

export default Login;