import { memo } from "react";
import { UsersCoordList } from "../organisms/layouts/home/UsersCoordList";
import { WcRecommendList } from "../organisms/layouts/home/WcRecommendList";

export const Home = memo(() => {
    return (
        <>
        <UsersCoordList />
        <WcRecommendList />
        </>
    )
})