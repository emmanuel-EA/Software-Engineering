function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatar}
            alt={props.user.name}
        />
    );
}

export default Avatar;