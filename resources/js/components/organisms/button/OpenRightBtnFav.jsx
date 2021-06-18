import { OpenBtn } from "../../atoms/button/OpenBtn"

export const OpenRightBtnFav = (props) => {
    const { capsID, topsID, pantsID, shoesID } = props;

    return (
        <div className="rightContainer">

        <OpenBtn item={capsID} name={'Caps'} type={'caps'} icon={<span className="material-icons-outlined"
        >face</span>} />

        <OpenBtn item={topsID} name={'Tops'} type={'tops'} icon={<i className="fas fa-tshirt sideFontAwesome"
        ></i>} />

        <OpenBtn item={pantsID} name={'Pants'} type={'pants'} icon={<span className="material-icons-outlined"
        >
                    airline_seat_legroom_extra
    </span>} />

        <OpenBtn item={shoesID} name={'Shoes'} type={'shoes'} icon={<i className="fas fa-shoe-prints sideFontAwesome"></i>} />
    </div>
    )
}