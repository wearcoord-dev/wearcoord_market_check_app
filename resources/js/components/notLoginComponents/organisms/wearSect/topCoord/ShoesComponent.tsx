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

export const ShoesComponent: FC<Props> = memo((props) => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { defaultGender, itemId } = props;

    const [defaultCategory, setDefaultCategory] = useState('');
    const [defaultUrl, setDefaultUrl] = useState('');

    useEffect(() => {
        if (notLoginUser) {

            axios.get("/api/getitemdetail", {
                params: {
                    id: itemId,
                    type: 'shoes',
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
    }, [itemId]);

    return (
        <>
            {itemId ? (
                <div style={{ textAlign: "center", margin: "auto" }}>
                    <img src={`/img/rakutenlist/${defaultGender}/${defaultCategory}/${defaultUrl}`} alt="" style={{ width: "100%", height: "100px", objectFit: "contain", position: "relative", margin: "auto" }} />
                </div>
            ) : (
                <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>
            )}
        </>
    )
});