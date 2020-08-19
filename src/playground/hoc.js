import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
                (
                    <WrappedComponent {...props} />
                ) :
                (
                    <p>Please Login</p>
                )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is details info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info={"this is login page"} />, document.getElementById('app'));