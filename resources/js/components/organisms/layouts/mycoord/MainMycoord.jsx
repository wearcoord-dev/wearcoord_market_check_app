import { memo, useContext, useEffect, useState } from "react";
import { useOpenBtnFunc } from "../../../../hooks/mycoord/useOpenBtnFunc";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";
import { useOpenBtnFix } from "../../../../hooks/useOpenBtnFix";
import { AppContext, UserWear } from "../../../providers/UserWear";
import { OpenLeftBtn } from "../../button/OpenLeftBtn";
import { OpenRightBtn } from "../../button/OpenRightBtn";
import { Mannequin } from "./Mannequin";

export const MainMycoord = memo(() => {
    // const { openBtnFunc } = useOpenBtnFunc();
    const { openBtnFix } = useOpenBtnFix();

    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const context = useContext(AppContext);

    const userCheck = context.contextName;

    const [ capsIDValue, setCapsID] = useState(null);
    const [ topsIDValue, setTopsID] = useState(null);
    const [ pantsIDValue, setPantsID] = useState(null);
    const [ shoesIDValue, setShoesID] = useState(null);

    // console.log(context);


    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました');

            GetWear(context);
        }
    }, [userCheck]);

    useEffect(() => {
        if (userWearInfo) {

            // console.log(`${(userWearInfo[1].topsData.id)}だぞ！！！`);
            // console.log(`${(userWearInfo[0].capsData.id)}だぞ！！！`);
            // console.log(`${(userWearInfo[2].pantsData.id)}だぞ！！！`);
            // console.log(`${(userWearInfo[3].shoesData.id)}だぞ！！！`);

            // nullかどうか
            if(userWearInfo[0]){
                let capsID = userWearInfo[0].capsData.id;
                setCapsID(capsID);
            }
            let topsID = userWearInfo[1].topsData.id;
            let pantsID = userWearInfo[2].pantsData.id;
            let shoesID = userWearInfo[3].shoesData.id;

            setTopsID(topsID);
            setPantsID(pantsID);
            setShoesID(shoesID);
        }
    }, [userWearInfo]);

    // useEffect(() => openBtnFunc());
    useEffect(() => openBtnFix());

    return (
        <>
            <OpenLeftBtn />
            {/* <UserWear> */}
                <Mannequin />
            {/* </UserWear> */}
            {userWearInfo ? (
            <OpenRightBtn
            capsID={capsIDValue}
            topsID={topsIDValue}
            pantsID={pantsIDValue}
            shoesID={shoesIDValue}
             />
             ) : <OpenRightBtn
             />}
        </>
    )
})