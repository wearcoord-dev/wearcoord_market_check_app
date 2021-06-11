import { memo, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useRemoveCaps } from "../../../hooks/selectwear/useRemoveCaps";
import { UserContext } from "../../providers/UserProvider";

export const OpenBtnCaps = memo((props) => {
    const { name, icon } = props;
    const { RemoveCaps } = useRemoveCaps();
    const context = useContext(UserContext);
    const user = context.contextName;

    const removeCaps = () => {
        RemoveCaps(user);
    };

    const history = useHistory();

    return (
        <>
            <div>
                <details className="btnDesign right" id={"btn" + name} >
                    <summary>
                        {icon}
                        <p className="btnText" id={"btnTitle" + name}>{name}</p>
                    </summary>
                    <div className="detailsBottom">
                        <div onClick={removeCaps} className="detailsBtn" id="innerRemoveBtn" method="post">
                            <button type="submit">
                                <DeleteOutlineIcon style={{ fontSize: 20 }} />
                                <p className="btnText">Capsを脱ぐ</p>
                            </button>
                        </div>
                        <hr />
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