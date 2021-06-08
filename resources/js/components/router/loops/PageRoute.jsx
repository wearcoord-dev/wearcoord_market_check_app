import { Home } from "../../pages/Home";
import { Mycoord } from "../../pages/Mycoord";
import { Item } from "../../pages/Item";
import { Favorite } from "../../pages/Favorite";
import { Cart } from "../../pages/Cart";
import { Page404 } from "../../pages/Page404";
import { MainSelectWear } from "../../organisms/layouts/selectWear/MainSelectWear";
import { MainSelectInnerWear } from "../../organisms/layouts/selectWear/MainSelectInnerWear";
import { SecondWear } from "../../providers/SecondWear";
import { Settings } from "../../pages/setPage/Settings";
import { SetUserFace } from "../../pages/setPage/SetUserFace";

export const PageRoute = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/mycoord",
    exact: true,
    children: <Mycoord />
  },
  {
    path: "/selectwear",
    exact: false,
    children: (<SecondWear><MainSelectWear /></SecondWear>
    )
  },
  {
    path: "/selectinner",
    exact: false,
    children: (<SecondWear><MainSelectInnerWear /></SecondWear>
    )
  },
  {
    path: "/item",
    exact: false,
    children: <Item />
  },
  {
    path: "/favorite",
    exact: false,
    children: <Favorite />
  },
  {
    path: "/cart",
    exact: false,
    children: <Cart />
  },
  {
    path: "/settings",
    exact: true,
    children: <Settings />
  },
  {
    path: "/settings/face",
    exact: false,
    children: <SetUserFace />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
]