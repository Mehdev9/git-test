const Counter = (props) => {
    return (
        <div>
            <h2>le resultat du compteur est {props.count}</h2>
            <button onClick={() => props.increment()}>+1</button>
        </div>
    )
}

export default Counter;