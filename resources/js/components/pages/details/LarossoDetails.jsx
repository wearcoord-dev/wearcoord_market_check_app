import { memo, useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useGetUserWear } from "../../../hooks/selectwear/useGetUserWear";
import { Detail } from "../../organisms/layouts/detail/Detail";
import { LarossoSelect } from "../../organisms/layouts/detail/larosso/LarossoSelect";
import { UserContext } from "../../providers/UserProvider";
import { UserWear } from "../../providers/UserWear";

export const LarossoDetails = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [mannequinUrl, setUrl] = useState(null);


    const context = useContext(UserContext);
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
            <UserWear>
                {userWearInfo ? (errorWear ? (
                    <p>error</p>
                ) : loadingWear ? (
                    <p>loading</p>
                ) : (
                    // <p>{userWearInfo.mannequin}</p>
                    <div>
                        {mannequinUrl ? (<div className="mannequinImg" style={{
                            'backgroundImage': mannequinUrl.backgroundImage
                        }}>
                            <LarossoSelect />
                        </div>) : <p>ng</p>}
                    </div>
                )) : <p></p>}
            </UserWear>
        </>
    )
})