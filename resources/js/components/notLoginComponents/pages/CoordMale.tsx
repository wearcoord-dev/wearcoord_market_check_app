import { Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SelectWear } from "../organisms/coord/SelectWear";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";

type Props = {
    defaultGender?: string;
    defaultMannequin?: string;
    defaultCaps?: string;
    defaultTops?: string;
    defaultPants?: string;
    defaultShoes?: string;
    defaultBrand?: string;
    ignoreSearch?: string;
};

const style = {
    bgImg: {},
    mannequinImg: {
        height: "400px",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxWidth: "400px",
        margin: "auto",
        position: "relative",
    },
} as const;

export const CoordMale: FC<Props> = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [defaultMannequin, setDefaultMannequin] = useState<string>("");
    const [defaultGender, setDefaultGender] = useState<string>("");
    const [defaultCaps, setDefaultCaps] = useState<string>(null);
    const [defaultTops, setDefaultTops] = useState<string>("1070");
    const [defaultPants, setDefaultPants] = useState<string>("436");
    const [defaultShoes, setDefaultShoes] = useState<string>(null);
    const [defaultBrand, setDefaultBrand] = useState<string>(null);
    const [ignoreSearch, setIgnoreSearch] = useState<string>(null);
    const search = useLocation().search;
    const getUrlParam = new URLSearchParams(search);

    // 訪れたユーザーのデフォルトウェアをstateで管理
    // 既に女性が登録されている場合は男性をセット

    useEffect(() => {
        if (notLoginUser) {
            if (notLoginUser.gender === null) {
                setDefaultGender("male");
            } else if (notLoginUser.gender === "female") {
                setDefaultGender("male");
                setDefaultMannequin("mens_170_model.png");
            } else if (notLoginUser.gender === "male") {
                setDefaultGender("male");
                setDefaultMannequin(notLoginUser.mannequin);
            }
            if (notLoginUser.mannequin === null) {
                setDefaultMannequin("mens_170_model.png");
            }
            if (notLoginUser.caps !== null) {
                if (notLoginUser.gender === "male") {
                    setDefaultCaps(notLoginUser.caps);
                }
            }
            if (notLoginUser.tops !== null) {
                if (notLoginUser.gender === "male") {
                    setDefaultTops(notLoginUser.tops);
                }
            }
            if (notLoginUser.pants !== null) {
                if (notLoginUser.gender === "male") {
                    setDefaultPants(notLoginUser.pants);
                }
            }
            if (notLoginUser.shoes !== null) {
                if (notLoginUser.gender === "male") {
                    setDefaultShoes(notLoginUser.shoes);
                }
            }
            if (notLoginUser.brand !== null) {
                setDefaultBrand(notLoginUser.brand);
            }

            // パラメータで特定のアイテムIDをしている場合はそれを表示

            const fetchData = async () => {
                if (getUrlParam.get("tops")) {
                    await setDefaultTops(getUrlParam.get("tops"));
                    await setIgnoreSearch("tops");
                }
                if (getUrlParam.get("pants")) {
                    await setDefaultPants(getUrlParam.get("pants"));
                    await setIgnoreSearch("pants");
                }
            };

            fetchData();
        }
    }, [notLoginUser]);

    return (
        <>
            <div style={style.bgImg}>
                {notLoginUser ? (
                    <div
                        style={{
                            ...style.mannequinImg,
                            backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})`,
                        }}
                    >
                        <SelectSection
                            defaultGender={defaultGender}
                            defaultMannequin={defaultMannequin}
                            defaultCaps={defaultCaps}
                            defaultTops={defaultTops}
                            defaultPants={defaultPants}
                            defaultShoes={defaultShoes}
                            defaultBrand={defaultBrand}
                            ignoreSearch={ignoreSearch}
                        />
                    </div>
                ) : (
                    <Stack direction="row" spacing={4}>
                        <Spinner size="xl" />
                    </Stack>
                )}
            </div>
        </>
    );
});

const SelectSection: FC<Props> = memo((props) => {
    const {
        defaultGender,
        defaultMannequin,
        defaultCaps,
        defaultTops,
        defaultPants,
        defaultShoes,
        defaultBrand,
        ignoreSearch,
    } = props;

    return (
        <>
            <SelectWear
                defaultGender={defaultGender}
                defaultMannequin={defaultMannequin}
                defaultCaps={defaultCaps}
                defaultTops={defaultTops}
                defaultPants={defaultPants}
                defaultShoes={defaultShoes}
                defaultBrand={defaultBrand}
                ignoreSearch={ignoreSearch}
            />
        </>
    );
});
