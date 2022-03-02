import { Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { SelectWear } from "../organisms/coord/SelectWear";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    defaultMannequin: string;
    defaultCaps?: string;
    defaultTops?: string;
    defaultPants?: string;
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
        // backgroundImage: "url(../../../../../../img/mannequin/mens_170_model.png)",
    }
} as const;

export const CoordFemale: FC<Props> = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [defaultMannequin, setDefaultMannequin] = useState<string>('');
    const [defaultGender, setDefaultGender] = useState<string>('');
    const [defaultCaps, setDefaultCaps] = useState<string>('');
    const [defaultTops, setDefaultTops] = useState<string>('');
    const [defaultPants, setDefaultPants] = useState<string>('');

    // console.log(defaultTops);

    // 訪れたユーザーのデフォルトウェアをstateで管理
    // 既に女性が登録されている場合は男性をセット

    useEffect(() => {
        if (notLoginUser) {
            if (notLoginUser.gender === null) {
                // setNotLoginUser({...notLoginUser, gender: 'male'});
                setDefaultGender('female');
            } else if (notLoginUser.gender === 'male') {
                setDefaultGender('female');
                setDefaultMannequin('woman_manekin1.png');
                setDefaultCaps(null);
                setDefaultTops(null);
                setDefaultPants(null);
            } else if (notLoginUser.gender === 'female') {
                setDefaultGender('female');
                setDefaultMannequin(notLoginUser.mannequin);
            }
            if (notLoginUser.mannequin === null) {
                // setNotLoginUser({ ...notLoginUser, mannequin: 'mens_170_model.png' });
                setDefaultMannequin('woman_manekin1.png');
            }
            if (notLoginUser.caps !== null) {
                if (notLoginUser.gender === 'female'){
                    setDefaultCaps(notLoginUser.caps);
                }
            }
            if (notLoginUser.tops !== null) {
                if (notLoginUser.gender === 'female') {
                    setDefaultTops(notLoginUser.tops);
                }
            }
            if (notLoginUser.pants !== null) {
                if (notLoginUser.gender === 'female') {
                    setDefaultPants(notLoginUser.pants);
                }
            }
        }
    }, [notLoginUser])

    // console.log(defaultGender);
    // console.log(defaultMannequin);
    // console.log(defaultCaps);

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
    const { defaultGender, defaultMannequin, defaultCaps, defaultTops, defaultPants } = props;

    return (
        <>
            <SelectWear
                defaultGender={defaultGender}
                defaultMannequin={defaultMannequin}
                defaultCaps={defaultCaps}
                defaultTops={defaultTops}
                defaultPants={defaultPants}
            />
        </>
    )
})