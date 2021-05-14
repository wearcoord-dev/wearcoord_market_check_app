import { memo } from "react";
import { Route, Switch } from "react-router";
import { MainLayout } from "../templates/MainLayout";

export const MainRouter = memo(() => {
    return (
        <Switch>
            <Route>
                <MainLayout></MainLayout>
            </Route>
        </Switch>
    )
})