import { memo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Detail } from "../../organisms/layouts/detail/Detail";
import { UserWear } from "../../providers/UserWear";

export const Details = memo(() => {
    const location = useLocation();
    const coordid = location.state.id;

    return (
        <>
            <UserWear>
                <Detail
                    coordid={coordid}
                />
            </UserWear>
        </>
    )
})