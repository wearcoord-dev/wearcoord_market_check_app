import { OpenBtn } from "../../atoms/button/OpenBtn"
import { OpenBtnCaps } from "../../atoms/button/OpenBtnCaps"

export const OpenRightBtn = () => {
    return (
        <div className="rightContainer">

        <OpenBtnCaps name={'Caps'} icon={<span className="material-icons-outlined">face</span>} />

        <OpenBtn name={'Tops'} icon={<i className="fas fa-tshirt sideFontAwesome"></i>} />

        <OpenBtn name={'Pants'} icon={<span className="material-icons-outlined">
                    airline_seat_legroom_extra
    </span>} />

        {/* <OpenBtn name={'Socks'} icon={<i className="fas fa-socks sideFontAwesome"></i>} /> */}

        <OpenBtn name={'Shoes'} icon={<i className="fas fa-shoe-prints sideFontAwesome"></i>} />
    </div>
    )
}