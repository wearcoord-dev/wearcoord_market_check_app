import { memo, useContext, useEffect, useState } from "react";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";
import { ValueContext } from "../../../providers/SecondWear";
import { SelectInner } from "./SelectInner";

export const MainSelectInnerWear = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [mannequinUrl, setUrl] = useState(null);


    const context = useContext(ValueContext);
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            GetWear(context)
        }
    }, [userCheck]);

    useEffect(() => {
        if (userWearInfo) {

            const url = { backgroundImage: 'url( ../../../img/mannequin/' + userWearInfo.mannequin + ')' }
            setUrl(url);
        }
    }, [userWearInfo]);

    return (
        <>
            {userWearInfo ? (errorWear ? (
                <p>error</p>
            ) : loadingWear ? (
                <p>loading</p>
            ) : (
                // <p>{userWearInfo.mannequin}</p>
                <div>
                    {mannequinUrl ? (<div className="mannequinImg" style={{'backgroundImage' : mannequinUrl.backgroundImage
                    }}>
                        <SelectInner />
                    </div>) : <p>ng</p>}
                </div>
            )) : <p></p>}
        </>
    )
})