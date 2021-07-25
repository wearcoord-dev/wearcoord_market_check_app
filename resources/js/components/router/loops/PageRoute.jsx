import { Home } from "../../pages/Home";
import { Mycoord } from "../../pages/Mycoord";
import { Item } from "../../pages/Item";
import { Favorite } from "../../pages/Favorite";
import { Cart } from "../../pages/Cart";
import { Page404 } from "../../pages/Page404";
import { MainSelectWear } from "../../organisms/layouts/selectWear/MainSelectWear";
import { MainSelectInnerWear } from "../../organisms/layouts/selectWear/MainSelectInnerWear";
import { MainSelectSocksWear } from "../../organisms/layouts/selectWear/MainSelectSocksWear";
import { SecondWear } from "../../providers/SecondWear";
import { Settings } from "../../pages/setPage/Settings";
import { SetUserFace } from "../../pages/setPage/SetUserFace";
import { Details } from "../../pages/details/Details";
import { WcDetails } from "../../pages/details/WcDetails";
import { LarossoDetails } from "../../pages/details/LarossoDetails";
import { InfoRegisterSize } from "../../pages/setPage/size/InfoRegisterSize";
import { RegisterSizeTops } from "../../pages/setPage/size/RegisterSizeTops";
import { RegisterSizePants } from "../../pages/setPage/size/RegisterSizePants";
import { RegisterFromWearTops } from "../../pages/setPage/size/RegisterFromWearTops";

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
    path: "/selectsocks",
    exact: false,
    children: (<SecondWear><MainSelectSocksWear /></SecondWear>
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
    exact: true,
    children: <SetUserFace />
  },
  {
    path: "/settings/size",
    exact: true,
    children: <InfoRegisterSize />
  },
  {
    path: "/settings/size/tops",
    exact: true,
    children: <RegisterSizeTops />
  },
  {
    path: "/settings/size/pants",
    exact: true,
    children: <RegisterSizePants />
  },
  {
    path: "/settings/size/wear",
    exact: true,
    children: <RegisterFromWearTops />
  },
  {
    path: "/detail",
    exact: false,
    children: <Details />
  },
  {
    path: "/wcdetail",
    exact: false,
    children: <WcDetails />
  },
  {
    path: "/larosso2021",
    exact: false,
    children: <LarossoDetails />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
]