import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {getUserAuthData} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";


export function RequireAuth({children}: { children: JSX.Element }) {
    const auth = useAppSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>;
    }

    return <>{children}</>;
}