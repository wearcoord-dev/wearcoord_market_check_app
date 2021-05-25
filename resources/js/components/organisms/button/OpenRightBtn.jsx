import { OpenBtn } from "../../atoms/button/OpenBtn"

export const OpenRightBtn = () => {
    return (
        <div className="rightContainer">

        <OpenBtn name={'Caps'} icon={<span className="material-icons-outlined">face</span>} />

        <OpenBtn name={'Tops'} icon={<i className="fas fa-tshirt sideFontAwesome"></i>} />

        <OpenBtn name={'Pants'} icon={<span className="material-icons-outlined">
                    airline_seat_legroom_extra
    </span>} />

        {/* <OpenBtn name={'Socks'} icon={<i className="fas fa-socks sideFontAwesome"></i>} /> */}

        <OpenBtn name={'Shoes'} icon={<i className="fas fa-shoe-prints sideFontAwesome"></i>} />
    </div>
    )
}