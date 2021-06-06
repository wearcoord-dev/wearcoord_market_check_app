import { memo } from "react";
import { Route, Switch } from "react-router";
import { BottomChoiceBtn } from "../atoms/button/BottomChoiceBtn";
import { MainMycoord } from "../organisms/layouts/mycoord/MainMycoord";
import { SelectWear } from "../organisms/layouts/selectWear/SelectWear";

export const Mycoord = memo(() => {

    return (
        <>
            <div className="displayFlex relative">
                <MainMycoord />
            </div>
            <BottomChoiceBtn />
        </>
    )
})