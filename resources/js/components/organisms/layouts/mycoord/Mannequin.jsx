import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../providers/UserWear";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";


export const Mannequin = memo(() => {
    const { GetWear, userWearInfo, loadingWear, errorWear } = useGetUserWear();
    const [mannequinUrl, setUrl] = useState(null);

    const context = useContext(AppContext);
    const userCheck = context.contextName;
    console.log(userCheck);

    useEffect(() => {
        if (userCheck !== undefined) {
            console.log('useEffectが実行されました')
            GetWear(context)
        }
    }, [userCheck]);


    useEffect(() => {
        if (userWearInfo) {

            const url = { backgroundImage: 'url( ../../../img/mannequin/' + userWearInfo.mannequin + ')' }
            setUrl(url);
        }
    }, [userWearInfo]);

    // console.log(mannequinUrl);
    // console.log(`ここが${userWearInfo}だぞ！`);




    return (
        <>
            {userWearInfo ? (errorWear ? (
                <p>error</p>
            ) : loadingWear ? (
                <p>loading</p>
            ) : (
                <div className="centerContainer">
                    {mannequinUrl ? (<div className="mannequinImg" style={{
                        'backgroundImage': mannequinUrl.backgroundImage
                    }}>

                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // capsdataがnullなら代替
                                <>
                                    {userWearInfo[0] ? <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "15%", height: "50px", objectFit: "cover", objectPosition: "bottom" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
                                    </div> : <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // topsdataがnullなら代替
                                <>
                                    {userWearInfo[1] ? <div style={{ textAlign: "center", margin: "auto", height: "120px", marginTop: "16px" }}>
                                        <img style={{ width: "100%", height: "130px", objectFit: "contain", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // pantsdataがnullなら代替
                                <>
                                    {userWearInfo[2] ? <div style={{ textAlign: "center", margin: "auto", height: "140px" }}>
                                        <img style={{ width: "100%", height: "170px", objectFit: "contain", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                        <div style={{ display: "flex", overflowX: "scroll" }}>
                            {userWearInfo ? (errorWear ? (
                                <p style={{ color: "red" }}>データの取得に失敗しました</p>
                            ) : loadingWear ? (
                                <p>Loading...</p>
                            ) : (

                                // shoesdataがnullなら代替
                                <>
                                    {userWearInfo[3] ? <div style={{ textAlign: "center", margin: "auto" }}>
                                        <img style={{ width: "100%", height: "100px", objectFit: "contain" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                    </div>) : <p>ng</p>}

                </div>
            )) : <div style={{ width: "40%", height: "50vh" }}></div>}
        </>
    )
})