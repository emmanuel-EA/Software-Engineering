import React from 'react';
import userinfo from './userInfo';
import FormattedDate from './FormattedDate';

function ComplexComment(props) {
    return (
        <div className="Comment componentBox">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <FormattedDate date={props.date} />
        </div>
    );
}

export default ComplexComment;