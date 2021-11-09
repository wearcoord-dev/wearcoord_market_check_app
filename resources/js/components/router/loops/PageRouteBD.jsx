import { CreateBDCoord } from "../../pages/bestdresser/base/createcoord/CreateBDCoord";
import { ShowBDCoord } from "../../pages/bestdresser/base/createcoord/ShowBDCoord";
import { BDCoordDetail } from "../../pages/bestdresser/base/showcoord/BDCoordDetail";
import { ShowBDCoordList } from "../../pages/bestdresser/base/showcoord/ShowBDCoordList";
import { TopBase } from "../../pages/bestdresser/base/top/TopBase";

export const PageRouteBD = [
  {
    path: "/main",
    exact: true,
    children: <TopBase />,
  },
  {
    path: "/main/show",
    exact: true,
    children: <ShowBDCoordList />,
  },
  {
    path: "/main/show/detail",
    exact: true,
    children: <BDCoordDetail />,
  },
  {
    path: "/main/create",
    exact: true,
    children: <ShowBDCoord />,
  },
  {
    path: "/main/create/coord",
    exact: true,
    children: <CreateBDCoord />
  },
]