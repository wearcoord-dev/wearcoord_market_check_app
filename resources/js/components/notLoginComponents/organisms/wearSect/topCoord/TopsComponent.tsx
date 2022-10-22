import { FC, memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNotLoginUser } from "../../../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    itemId: string;
    defaultCategory: string;
    defaultUrl: string;
}

export const TopsComponent: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { defaultGender, itemId, defaultCategory, defaultUrl } = props;

    return (
        <>
            {itemId && defaultCategory && defaultUrl ? (
                <div style={{ width: "100%", height: "160px", margin: "auto" }}>
                    <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "125px", height: "100%", objectFit: "cover", zIndex: 100, position: "relative", margin: "auto" }} />
                </div>
            ) : (
                <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>
            )}
        </>
    )
});