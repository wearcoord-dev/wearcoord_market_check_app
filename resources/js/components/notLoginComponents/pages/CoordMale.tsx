import { Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { SelectWear } from "../organisms/coord/SelectWear";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";

type Props = {
    defaultGender: string;
    defaultMannequin: string;
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

export const CoordMale: FC<Props> = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [defaultMannequin, setDefaultMannequin] = useState<string>('');
    const [defaultGender, setDefaultGender] = useState<string>('');
    // console.log(notLoginUser);

    // 訪れたユーザーのデフォルトウェアをstateで管理
    // 既に女性が登録されている場合は男性をセット

    useEffect(() => {
        if (notLoginUser) {
            if (notLoginUser.gender === null) {
                // setNotLoginUser({...notLoginUser, gender: 'male'});
                setDefaultGender('male');
            } else if (notLoginUser.gender === 'female') {
                setDefaultGender('male');
                setDefaultMannequin('mens_170_model.png');
            } else if (notLoginUser.gender === 'male') {
                setDefaultGender('male');
                setDefaultMannequin(notLoginUser.mannequin);
            }
            if (notLoginUser.mannequin === null) {
                // setNotLoginUser({ ...notLoginUser, mannequin: 'mens_170_model.png' });
                setDefaultMannequin('mens_170_model.png');
            }
        }
    }, [notLoginUser])

    // console.log(defaultGender);
    // console.log(defaultMannequin);

    return (
        <>
            <div style={style.bgImg}>
                {notLoginUser ?
                    (
                        <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})` }}>
                            <SelectSection
                                defaultGender={defaultGender}
                                defaultMannequin={defaultMannequin}
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
    const { defaultGender, defaultMannequin } = props;

    return (
        <>
            <SelectWear
                defaultGender={defaultGender}
                defaultMannequin={defaultMannequin}
            />
        </>
    )
})