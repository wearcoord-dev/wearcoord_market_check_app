import React from 'react';
import ReactDOM from 'react-dom';

function NotLogin() {
    return (
        <div>
            <p>notLogin</p>
        </div>
    );
}

export default NotLogin;

if (document.getElementById('notLogin')) {
    ReactDOM.render(<NotLogin />, document.getElementById('notLogin'));
}
