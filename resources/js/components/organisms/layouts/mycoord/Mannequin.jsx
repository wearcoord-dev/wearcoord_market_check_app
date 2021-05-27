import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../providers/UserWear";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";


export const Mannequin = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [ mannequinUrl, setUrl ] = useState(null);

    const context = useContext(AppContext);
    const userCheck = context.contextName;
    // console.log(userCheck);

    useEffect(() => {
        if (userCheck !== undefined) {
            // console.log('useEffectが実行されました')
            GetWear(context)
        }
    }, [userCheck]);

    console.log(userWearInfo);

    useEffect(() => {
        if(userWearInfo){
            const url = {backgroundImage:'url( ../../../img/mannequin/' + userWearInfo.mannequin + ')'}
            setUrl(url);
        }
    }, [userWearInfo]);

    console.log(mannequinUrl);



    return (
        <>
            {userWearInfo ? (errorWear ? (
                <p>error</p>
            ) : loadingWear ? (
                <p>loading</p>
            ) : (
                // <p>{userWearInfo.mannequin}</p>
                <div className="centerContainer">
                    {mannequinUrl ? ( <div className="mannequinImg" style={{'backgroundImage' : mannequinUrl.backgroundImage
                    }}>
                    </div> ) : <p>ng</p>}

                </div>
            )) : <p></p>}
        </>
    )
})