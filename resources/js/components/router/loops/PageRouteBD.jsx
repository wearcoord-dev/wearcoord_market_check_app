import { CreateBDCoord } from "../../pages/bestdresser/base/createcoord/CreateBDCoord";
import { ShowBDCoord } from "../../pages/bestdresser/base/createcoord/ShowBDCoord";
import { ShowBDCoordList } from "../../pages/bestdresser/base/showcoord/ShowBDCoordList";
import { TopBase } from "../../pages/bestdresser/base/top/TopBase";

export const PageRouteBD = [
  {
    path: "/main",
    exact: false,
    children: <TopBase />,
  },
  {
    path: "/show",
    exact: false,
    children: <ShowBDCoordList />,
  },
  {
    path: "/create",
    exact: true,
    children: <ShowBDCoord />,
  },
  {
    path: "/create/coord",
    exact: true,
    children: <CreateBDCoord />
  },
]