import { Navigate } from "react-router-dom";

// This component returns a Route that either display the prop element
// or navigates to the login. If roles are provided, the route will require
// all of the roles when all is true, or any of the roles when all is false
export const HomeRedirect = ({  loggedInUser, roles, all }) => {
    let admin = false;
    if (loggedInUser) {
        if (roles && roles.length) {
            admin = all
                ? roles.every((r) => loggedInUser.roles.includes(r))
                : roles.some((r) => loggedInUser.roles.includes(r));
        } else {
            admin = true;
        }
    }

    return admin ? <Navigate to="/dashboard" /> : <Navigate to="/properties" />;
};
