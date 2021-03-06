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
import { RegisterFromWearPants } from "../../pages/setPage/size/RegisterFromWearPants";
import { ShowSizeResult } from "../../pages/setPage/size/ShowSizeResult";
import { PreDelete } from "../../pages/setPage/deleteAccount/PreDelete";
import { PassCheck } from "../../pages/bestdresser/base/PassCheck";
import { BestDressBase } from "../../pages/bestdresser/base/BestDressBase";
import { TenezDetails } from "../../pages/details/TenezDetails";

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
    path: "/settings/delete",
    exact: true,
    children: <PreDelete />
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
    path: "/settings/size/wear/tops",
    exact: true,
    children: <RegisterFromWearTops />
  },
  {
    path: "/settings/size/wear/pants",
    exact: true,
    children: <RegisterFromWearPants />
  },
  {
    path: "/settings/size/result",
    exact: true,
    children: <ShowSizeResult />
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
    path: "/larosso",
    exact: false,
    children: <LarossoDetails />
  },
  {
    path: "/10ez",
    exact: false,
    children: <TenezDetails />
  },
  {
    path: "/bestdresser/login",
    exact: true,
    children: <PassCheck />
  },
  {
    path: "/bestdresser/main",
    exact: true,
    children: <BestDressBase />
  },
  {
    path: "/bestdresser/*",
    exact: true,
    children: <BestDressBase />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
]