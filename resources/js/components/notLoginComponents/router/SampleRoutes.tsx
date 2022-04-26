import { ChangeMannequin } from "../pages/ChangeManenequin";
import { CoordFemale } from "../pages/CoordFemale";
import { CoordMale } from "../pages/CoordMale";
import { Items } from "../pages/Items";
import { Page404 } from "../pages/Page404";
import { SampleTop } from "../pages/SampleTop";


export const SampleRoutes = [
    {
        path: "/",
        exact: true,
        children: <SampleTop />
    },
    {
        path: "/male",
        exact: false,
        children: <CoordMale />
    },
    {
        path: "/female",
        exact: false,
        children: <CoordFemale />
    },
    {
        path: "/mannequin",
        exact: false,
        children: <ChangeMannequin />
    },
    {
        path: "/items",
        exact: true,
        children: <Items />
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />
    },
];