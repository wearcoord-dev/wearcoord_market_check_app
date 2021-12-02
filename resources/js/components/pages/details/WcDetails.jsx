import { memo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Detail } from "../../organisms/layouts/detail/Detail";
import { WcDetail } from "../../organisms/layouts/detail/WcDetail";
import { UserWear } from "../../providers/UserWear";

export const WcDetails = memo(() => {
    const location = useLocation();
    const coordid = location.state.id;

    return (
        <>
            <UserWear>
                <WcDetail
                    coordid={coordid}
                />
            </UserWear>
        </>
    )
})