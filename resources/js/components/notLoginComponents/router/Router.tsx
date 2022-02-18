import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { SampleRoutes } from "./SampleRoutes";

export const Router: FC = memo(() => {
    return (
        <Switch>
            <Route path="/sample" render={({ match: { url } }) => (
                <Switch>
                    {SampleRoutes.map((route) => (
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={`${url}${route.path}`}
                        >
                            {route.children}
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
});