import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";


export const OpenBtnLeft = memo((props) => {
    const { name, icon } = props;

    const history = useHistory();

    const toSelectWear =useCallback(() => history.push("/main/selectwear") );

    return (
        <>
            <div>
                <details className="btnDesign left" id={"btn" + name} >
                    <summary id={"btnSummary" + name}>
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
                    </div>
                </details>
            </div>
        </>
    )
})