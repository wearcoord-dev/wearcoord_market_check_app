import { memo, useContext, useEffect } from "react";
import { useGetRegisterCoord } from "../../hooks/mycoord/useGetRegisterCoord";
import { UserContext } from "../providers/UserProvider";

export const Favorite = memo(() => {
    const { GetRegisterCoord,  userCoordData, loadingRegisterCoord, errorRegisterCoord } = useGetRegisterCoord();

    const context = useContext(UserContext);
    console.log(context);
    const userCheck = context.contextName;


    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました')
            GetRegisterCoord(context)
        }
    }, [userCheck]);

    return (
        <>
        <p>favoriteです</p>
        {userCoordData ? (
            <div>
            {userCoordData.map((data) => (
                <div key={data.id}>
                    <p>{data.id}</p>
                    <img src={data.img} alt="" />
                </div>
            ))}
            </div>
        ) : <p>ありません</p>}

        </>
    )
})