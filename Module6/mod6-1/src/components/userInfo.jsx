// Userinfo.jsx

import Avatar from './Avatar';

function userinfo(props) {
    return (
        <div className="userinfo">
            <Avatar url={props.user.avatarURL} alt={props.user.name} />
            <div className="userinfo-name">{props.user.name}</div>
        </div>
    );
}

export default userinfo;