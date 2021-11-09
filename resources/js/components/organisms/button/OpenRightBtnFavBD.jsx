import { OpenBtnBD } from "../../atoms/button/OpenBtnBD";

export const OpenRightBtnFavBD = (props) => {
    const { capsID, topsID, pantsID, shoesID } = props;

    return (
        <div className="rightContainer">

        <OpenBtnBD item={capsID} name={'Caps'} type={'caps'} icon={<span className="material-icons-outlined"
        >face</span>} />

        <OpenBtnBD item={topsID} name={'Tops'} type={'tops'} icon={<i className="fas fa-tshirt sideFontAwesome"
        ></i>} />

        <OpenBtnBD item={pantsID} name={'Pants'} type={'pants'} icon={<span className="material-icons-outlined"
        >
                    airline_seat_legroom_extra
    </span>} />

        <OpenBtnBD item={shoesID} name={'Shoes'} type={'shoes'} icon={<i className="fas fa-shoe-prints sideFontAwesome"></i>} />
    </div>
    )
}