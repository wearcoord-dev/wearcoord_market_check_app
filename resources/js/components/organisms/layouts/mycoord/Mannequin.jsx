import { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../providers/UserWear";
import { useGetUserWear } from "../../../../hooks/selectwear/useGetUserWear";
import html2canvas from 'html2canvas';


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

    const createImg =() => {

        html2canvas(document.querySelector("#centerContainer"),{ backgroundColor:null }).then(function(canvas) {
            // document.body.appendChild(canvas);
            document.getElementById('mannequinImgCanvas').setAttribute("value",canvas.toDataURL());
            document.getElementById('canvas_img_test').setAttribute("src",canvas.toDataURL());
        });
    }


    // html2canvas(document.querySelector("#centerContainer"),{ backgroundColor:null }).then(canvas => {

    //     document.getElementById('mannequinImgCanvas').setAttribute("value",canvas.toDataURL());
    //   });


    return (
        <>
            {userWearInfo ? (errorWear ? (
                <p>error</p>
            ) : loadingWear ? (
                <p>loading</p>
            ) : (
                <div className="centerContainer" id="centerContainer">
                    {mannequinUrl ? (<div id="mannequinImgCanvas" className="mannequinImg" style={{
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
                                        <img style={{ width: "30%", height: "50px"}} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[0].capsData.category}/${userWearInfo[0].capsData.url}`} alt="" />
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
                                        <img style={{ width: "70%", height: "130px", zIndex: "100", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[1].topsData.category}/${userWearInfo[1].topsData.url}`} alt="" />
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
                                        <img style={{ width: "100%", height: "170px", position: "relative" }} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[2].pantsData.category}/${userWearInfo[2].pantsData.url}`} alt="" />
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
                                        <img style={{ width: "50%", height: "100px"}} src={`/img/rakutenlist/${context.contextName.gender}/${userWearInfo[3].shoesData.category}/${userWearInfo[3].shoesData.url}`} alt="" />
                                    </div> : <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>}
                                </>
                            )) : <></>}
                        </div>

                    </div>) : <p>ng</p>}

                </div>
            )) : <div style={{ width: "40%", height: "50vh" }}></div>}

            <div><input type="hidden" id="mannequinImgCanvas" name="mannequinImgCanvas" value=""></input></div>
            <img id="canvas_img_test" src="" alt="" />
            <div onClick={createImg} className="bottomRightBtn" method="get">
                <div className="searchBtn">
                    <span className="material-icons-outlined">
                        screen_search_desktop
                </span>
                    <p className="btnText">コーデを登録する</p>
                </div>
            </div>
        </>
    )
})