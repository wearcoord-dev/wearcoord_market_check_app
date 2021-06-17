import { memo, useEffect } from "react";
import { useGetUserCoord } from "../../../../hooks/home/useGetUserCoord";

export const UsersCoordList = memo(() => {
    const { GetUserCoord,  userCoordList, loadingUserCoordList, errorUserCoordList } = useGetUserCoord();

    useEffect(() => {
            console.log('useEffectが実行されました');
            GetUserCoord();
    }, []);

    return (
        <>
        <p>usersdayo</p>
        <div>
        {userCoordList ? (errorUserCoordList ? (<p>データの取得に失敗しました</p>) : loadingUserCoordList ? (<p>Loading...</p>) : (
            <>
            <div>
                {userCoordList.map((item) => (
                    <div key={item.id}>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
            </>
        )) : <p>ng</p>}
        </div>
        </>
    )
})