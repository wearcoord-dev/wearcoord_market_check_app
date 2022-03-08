import { FC, memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNotLoginUser } from "../../../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    itemId: string;
    defaultCategory: string;
    defaultUrl: string;
}

export const CapsComponent: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { defaultGender, itemId, defaultCategory, defaultUrl } = props;

    return (
        <>
            {itemId && defaultCategory && defaultUrl ? (
                <div style={{ width: "15%", height: "50px", margin: "auto" }}>
                    <img className="wearImg" src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ margin: 'auto' }} />
                </div>
            ) : (
                <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>
            )}
        </>
    )
});