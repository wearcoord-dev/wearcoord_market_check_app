import { FC, memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNotLoginUser } from "../../../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    itemId: string;
    defaultCategory: string;
    defaultUrl: string;
}

export const ShoesComponent: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { defaultGender, itemId, defaultCategory, defaultUrl } = props;

    return (
        <>
            {itemId && defaultCategory && defaultUrl ? (
                <div style={{ textAlign: "center", margin: "auto" }}>
                    <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "100%", height: "100px", objectFit: "contain", position: "relative", margin: "auto" }} />
                </div>
            ) : (
                <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>
            )}
        </>
    )
});