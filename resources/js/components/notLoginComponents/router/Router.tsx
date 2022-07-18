import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page404 } from '../pages/Page404';
import { NotLoginUserProvider } from '../provider/NotLoginUserProvider';
import { HeaderLayout } from '../templates/HeaderLayout';
import { EcRoutes } from './EcRoutes';
import { SampleRoutes } from './SampleRoutes';

export const Router: FC = memo(() => {
    return (
        <Switch>
            <Route
                path="/ec"
                render={({ match: { url } }) => (
                    <Switch>
                        {EcRoutes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                {route.children}
                            </Route>
                        ))}
                    </Switch>
                )}
            />
            <NotLoginUserProvider>
                <Route
                    path="/sample"
                    render={({ match: { url } }) => (
                        <Switch>
                            {SampleRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    <HeaderLayout>
                                        {route.children}
                                    </HeaderLayout>
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            </NotLoginUserProvider>

            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
});
