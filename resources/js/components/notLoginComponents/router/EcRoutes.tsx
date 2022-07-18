import { Ralosso } from "../ec/pages/Ralosso";
import { Tenez } from "../ec/pages/Tenez";
import { ChangeMannequin } from "../pages/ChangeManenequin";
import { CoordFemale } from "../pages/CoordFemale";
import { CoordMale } from "../pages/CoordMale";
import { Items } from "../pages/Items";
import { Page404 } from "../pages/Page404";
import { SampleTop } from "../pages/SampleTop";


export const EcRoutes = [
    {
        path: '/',
        exact: true,
        children: <Page404 />,
    },
    {
        path: '/tenez',
        exact: false,
        children: <Tenez />,
    },
    {
        path: '/ralosso',
        exact: false,
        children: <Ralosso />,
    },
    {
        path: '*',
        exact: false,
        children: <Page404 />,
    },
];