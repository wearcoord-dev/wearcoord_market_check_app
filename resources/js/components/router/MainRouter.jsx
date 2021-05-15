import { memo } from "react";
import { Route, Switch } from "react-router";
import { Page404 } from "../pages/Page404";
import { MainLayout } from "../templates/MainLayout";
import { PageRoute } from "./loops/PageRoute";

export const MainRouter = memo(() => {
    return (
        <Switch>
            {/* <Route>
                <MainLayout></MainLayout>
            </Route> */}
            <Route path="/main" render={({ match: { url } }) => (
                <Switch>
                    {PageRoute.map((route) => (
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={`${url}${route.path}`}>
                            <MainLayout>{route.children}</MainLayout>
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})