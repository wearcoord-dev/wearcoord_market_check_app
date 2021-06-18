import { memo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Detail } from "../organisms/layouts/detail/Detail";
import { UserWear } from "../providers/UserWear";

export const Details = memo(() => {
    const location = useLocation();
    console.log(location.state.id);
    // const history = useHistory();
    // console.log(history.location.state.id);

    return (
        <>
            <div className="displayFlex relative">
                <UserWear>
                    {/* <p>{JSON.stringify(props)}</p> */}
                    <Detail />
                </UserWear>
            </div>
        </>
    )
})