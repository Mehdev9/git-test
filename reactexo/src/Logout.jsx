const Logout = (props) => {
    return (
        <div>
            <h2>Deconnexion</h2>
            <button onClick={() => props.logout()}>Se deconnecter</button>
        </div>
    )
}

export default Logout;