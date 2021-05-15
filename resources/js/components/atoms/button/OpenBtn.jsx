import { memo } from "react";

export const OpenBtn = memo((props) => {
    const { name, icon } = props;

    return (
        <>
            <div>
                <details className="btnDesign right" id={"btn" + name} >
                    <summary>
                        {icon}
                        <p className="btnText" id={"btnTitle" + name}>{name}</p>
                    </summary>
                    <div className="detailsBottom">
                        <form action="/main/home" className="detailsBtn" method="get">
                            <button type="submit">
                                <span className="material-icons-outlined">
                                    shopping_cart
                </span>
                                <p className="btnText">買う</p>
                                <input type="hidden" name="type" value={name} />
                            </button>

                        </form>
                        <hr />
                        <form action="{{ route('searchmysetsGetCaps') }}" className="detailsBtn2" method="get">
                            <button className="searchBtn" type="submit">
                                <input type="hidden" name="type" value="caps" />
                                <span className="material-icons-outlined">
                                    screen_search_desktop
                </span>
                                <p className="btnText">選ぶ</p>
                            </button>
                        </form>
                    </div>
                </details>
            </div>
        </>
    )
})