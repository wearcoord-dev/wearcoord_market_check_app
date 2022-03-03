import { FC, memo, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNotLoginUser } from "../../../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    itemId: string;
}

const colorList = [
    'all',
    'black',
    'white',
    'navy',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
];

export const TopsComponent: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { defaultGender, itemId } = props;

    const [defaultCategory, setDefaultCategory] = useState();
    const [defaultUrl, setDefaultUrl] = useState();

    useEffect(() => {
        if (notLoginUser) {
            if (!defaultCategory) {
                if (!defaultUrl) {
                    axios.get("/api/getitemdetail", {
                        params: {
                            id: itemId,
                            type: 'tops',
                        }
                    }).then((res) => {
                        setDefaultCategory(res.data.category);
                        colorList.map((color) => {
                            if (res.data[color] !== null)
                                setDefaultUrl(res.data[color]);
                        })
                    }).catch(() => {
                    }).finally(() => {
                    });
                }
            }

        }
    }, [itemId, defaultCategory, defaultUrl]);

    // console.log(defaultCategory, defaultUrl)

    return (
        <>
            {itemId && defaultCategory && defaultUrl ? (
                <div style={{ width: "100%", height: "130px", margin: "auto" }}>
                    <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "125px", height: "125px", objectFit: "contain", zIndex: 100, position: "relative", margin: "auto" }} />
                </div>
            ) : (
                <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>
            )}
        </>
    )
});