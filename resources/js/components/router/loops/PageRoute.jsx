import { Home } from "../../pages/Home";
import { Mycoord } from "../../pages/Mycoord";
import { Item } from "../../pages/Item";
import { Favorite } from "../../pages/Favorite";
import { Cart } from "../../pages/Cart";
import { Page404 } from "../../pages/Page404";
import { MainSelectWear } from "../../organisms/layouts/selectWear/MainSelectWear";
import { SecondWear } from "../../providers/SecondWear";

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
    path: "*",
    exact: false,
    children: <Page404 />
  },
]