import { memo, useContext, useEffect } from "react";
import { AppContext } from "../../../providers/UserWear";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";


export const Mannequin = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();

    const context = useContext(AppContext);
    const userCheck = context.contextName;
    // console.log(userCheck);

    useEffect(() => {
            if(userCheck !== undefined){
            // console.log('useEffectが実行されました')
            GetWear(context)
        }
        }, [userCheck]);

    // console.log(userWearInfo);



    return (
        <>
        <div className="centerContainer">
        <div className="mannequinImg" style={{     backgroundImage: "url('../../../img/mannequin/mannequin_done3.png')"
 }}>
        </div>
        </div>
        </>
    )
})