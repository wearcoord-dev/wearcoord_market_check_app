import { Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
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
}

const style = {
    bgImg: {
    },
    mannequinImg: {
        height: "400px",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxWidth: "400px",
        margin: "auto",
        position: "relative",
    }
} as const;

export const CoordMale: FC<Props> = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [defaultMannequin, setDefaultMannequin] = useState<string>('');
    const [defaultGender, setDefaultGender] = useState<string>('');
    const [defaultCaps, setDefaultCaps] = useState<string>(null);
    const [defaultTops, setDefaultTops] = useState<string>(null);
    const [defaultPants, setDefaultPants] = useState<string>(null);
    const [defaultShoes, setDefaultShoes] = useState<string>(null);
    const [defaultBrand, setDefaultBrand] = useState<string>(null);

    // 訪れたユーザーのデフォルトウェアをstateで管理
    // 既に女性が登録されている場合は男性をセット

    // console.log(defaultBrand)

    useEffect(() => {
        if (notLoginUser) {
            if (notLoginUser.gender === null) {
                setDefaultGender('male');
            } else if (notLoginUser.gender === 'female') {
                setDefaultGender('male');
                setDefaultMannequin('mens_170_model.png');
                // setDefaultCaps(null);
                // setDefaultTops('1070');
                // setDefaultPants('436');
                // setDefaultShoes(null);
            } else if (notLoginUser.gender === 'male') {
                setDefaultGender('male');
                setDefaultMannequin(notLoginUser.mannequin);
            }
            if (notLoginUser.mannequin === null) {
                setDefaultMannequin('mens_170_model.png');
            }
            if (notLoginUser.caps !== null) {
                if (notLoginUser.gender === 'male') {
                    setDefaultCaps(notLoginUser.caps);
                }
            }
            if (notLoginUser.tops !== null) {
                if (notLoginUser.gender === 'male') {
                    setDefaultTops(notLoginUser.tops);
                }
            }
            if (notLoginUser.pants !== null) {
                if (notLoginUser.gender === 'male') {
                    setDefaultPants(notLoginUser.pants);
                }
            }
            if (notLoginUser.shoes !== null) {
                if (notLoginUser.gender === 'male') {
                    setDefaultShoes(notLoginUser.shoes);
                }
            }
            if (notLoginUser.brand !== null) {
                setDefaultBrand(notLoginUser.brand);
            }
        }
    }, [notLoginUser])

    return (
        <>
            <div style={style.bgImg}>
                {notLoginUser ?
                    (
                        <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})` }}>
                            <SelectSection
                                defaultGender={defaultGender}
                                defaultMannequin={defaultMannequin}
                                defaultCaps={defaultCaps}
                                defaultTops={defaultTops}
                                defaultPants={defaultPants}
                                defaultShoes={defaultShoes}
                                defaultBrand={defaultBrand}
                            />
                        </div>
                    )
                    : (
                        <Stack direction='row' spacing={4}>
                            <Spinner size='xl' />
                        </Stack>
                    )
                }
            </div>
        </>
    )
});

const SelectSection: FC<Props> = memo((props) => {
    const { defaultGender, defaultMannequin, defaultCaps, defaultTops, defaultPants, defaultShoes, defaultBrand } = props;

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
            />
        </>
    )
})