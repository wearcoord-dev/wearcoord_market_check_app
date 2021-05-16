import { memo } from "react";
import { Route, Switch } from "react-router";
import { MainMycoord } from "../organisms/layouts/mycoord/MainMycoord";
import { SelectWear } from "../organisms/layouts/selectWear/SelectWear";

export const Mycoord = memo(() => {

    return (
        <>
            <div className="displayFlex">
                <MainMycoord />
            </div>
        </>
    )
})