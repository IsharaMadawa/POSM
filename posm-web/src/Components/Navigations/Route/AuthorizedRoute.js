import { Route } from 'react-router-dom';
//import SecurityManager from '../../../Security/SecurityManager';
//import NotAuthorized from '../../Errors/NotAuthorized/NotAuthorized';
// import __ from '../../../Utilities/UnderscoreUtility';

function AuthorizedRoute({ component: Component, authorized, ...rest }) {
    //SecurityManager.setPermissions(true);

    // return (
    //     <Route {...rest} render={(props) => {
    //         return __.hasNoValue(authorized) || SecurityManager.hasPermission(authorized.resource, authorized.actions, authorized.matchMethod)
    //             ? <Component {...props} />
    //             : <NotAuthorized />
    //     }} />
    // )

    return (
        <Route {...rest} render={(props) => {
            return <Component {...props} />;
        }} />
    )
}


export default AuthorizedRoute;