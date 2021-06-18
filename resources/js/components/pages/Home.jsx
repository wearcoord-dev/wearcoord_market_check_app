import { memo } from "react";
import { HomeTopSection } from "../organisms/layouts/home/HomeTopSection";
import { UsersCoordList } from "../organisms/layouts/home/UsersCoordList";
import { WcRecommendList } from "../organisms/layouts/home/WcRecommendList";

export const Home = memo(() => {
    return (
        <>
            <div style={{ marginBottom: "70px" }}>
                <HomeTopSection />
                <UsersCoordList />
                <WcRecommendList />
            </div>
        </>
    )
})