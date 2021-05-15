import { memo } from "react";

export const OpenLeftBtn = memo(() => {
    return (
        <>
            <div className="leftContainer">

                <details className="btnDesign left" id="btnBand">
                    <summary>
                        <span className="material-icons-outlined">
                            circle
            </span>
                        <p className="btnText" id="btnTitleBand">Band</p>
                    </summary>
                    <div className="detailsBottom">
                        <a href="" className="detailsBtn">
                            <p className="btnText">準備中</p>
                        </a>
                    </div>
                </details>

                <details className="btnDesign left" id="btnInner">
                    <summary>
                        <i className="fas fa-tshirt sideFontAwesome"></i>
                        <p className="btnText" id="btnTitleInner">Inner</p>
                    </summary>
                    <div className="detailsBottom">
                        <form action="{{ route('removeInner') }}" className="detailsBtn" id="innerRemoveBtn" method="post">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    accessibility
                    </span>
                                <p className="btnText">インナーを脱ぐ</p>
                                <input type="hidden" name="innerUrl" value="mannequin_done3.png" />
                                <input type="hidden" name="innerUrl" value="manekin_female_10001000.png" />
                            </button>
                        </form>
                        <hr />
                        <form action="{{ route('searchmysetsGetInner') }}" className="detailsBtn" method="get">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p className="btnText">選ぶ</p>
                                <input type="hidden" name="type" value="inner" />

                            </button>
                        </form>
                    </div>
                </details>
            </div>
        </>
    )
})