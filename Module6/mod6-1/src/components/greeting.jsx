function Greeting(props) {
    return (
        <div className="Greeting">
            <h3>Hello {props.name ? props.name : 'World'}</h3>
            {props.children}
        </div>
    )
}

export default Greeting

