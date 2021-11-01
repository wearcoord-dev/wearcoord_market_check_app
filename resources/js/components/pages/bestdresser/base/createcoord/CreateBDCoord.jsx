import { memo, useContext, useEffect, useState } from "react";
import { useGetBDUserWear } from "../../../../../hooks/bestdresser/useGetBDUserWear";
import { ValueContext } from "../../../../providers/SecondWear";
import { UserContext } from "../../../../providers/UserProvider";
import { SelectBDCoord } from "./SelectBDCoord";


export const CreateBDCoord = memo(() => {
    const { GetBDUserWear,  userBDWear, loadingBDUserWear, errorBDUserWear } = useGetBDUserWear();
    const [mannequinUrl, setUrl] = useState(null);


    const context = useContext(UserContext);
    const userCheck = context.contextName;

    useEffect(() => {
        if (userCheck !== undefined) {
            GetBDUserWear(context)
        }
    }, [userCheck]);

    useEffect(() => {
        if (userBDWear) {

            const url = { backgroundImage: 'url( /img/mannequin/' + userBDWear.mannequin + ')' }
            setUrl(url.backgroundImage);
        }
    }, [userBDWear]);

    return (
        <>
            {userBDWear ? (errorBDUserWear ? (
                <p>error</p>
            ) : loadingBDUserWear ? (
                <p>loading</p>
            ) : (
                <div>
                    {mannequinUrl ? (<div className="mannequinImg" style={{'backgroundImage' : mannequinUrl
                    }}>
                        <SelectBDCoord />
                    </div>) : <p>ng</p>}
                </div>
            )) : <p></p>}
        </>
    )
})