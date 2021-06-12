import { memo } from "react";
import { Route, Switch } from "react-router";
import { BottomChoiceBtn } from "../atoms/button/BottomChoiceBtn";
import { MainMycoord } from "../organisms/layouts/mycoord/MainMycoord";
import { SelectWear } from "../organisms/layouts/selectWear/SelectWear";
import { UserWear } from "../providers/UserWear";

export const Mycoord = memo(() => {

    return (
        <>
            <div className="displayFlex relative">
                <UserWear>
                    <MainMycoord />
                </UserWear>
            </div>

            <BottomChoiceBtn />
        </>
    )
})