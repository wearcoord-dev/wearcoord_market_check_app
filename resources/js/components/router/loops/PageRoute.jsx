import { Home } from "../../pages/Home";
import { Mycoord } from "../../pages/Mycoord";
import { Item } from "../../pages/Item";
import { Favorite } from "../../pages/Favorite";
import { Cart } from "../../pages/Cart";

export const PageRoute = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/mycoord",
    exact: false,
    children: <Mycoord />
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
]