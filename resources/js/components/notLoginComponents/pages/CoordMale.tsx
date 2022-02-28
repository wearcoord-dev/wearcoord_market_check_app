import { Spinner, Stack } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { SelectWear } from "../organisms/coord/SelectWear";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";

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

export const CoordMale: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [defaultMannequin, setDefaultMannequin] = useState<String>('');
    const [defaultGender, setDefaultGender] = useState<String>('');
    console.log(notLoginUser);

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
            }
            if (notLoginUser.mannequin === null) {
                // setNotLoginUser({ ...notLoginUser, mannequin: 'mens_170_model.png' });
                setDefaultMannequin('mens_170_model.png');
            }
        }
    }, [notLoginUser])

    console.log(defaultGender);
    console.log(defaultMannequin);

    return (
        <>
            <div style={style.bgImg}>
                {notLoginUser ?
                    (notLoginUser.gender === 'male' ?
                        // 男性で既に登録している場合
                        ((notLoginUser.mannequin ? (
                            <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                                <SelectSection />
                            </div>
                        ) : (
                            <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})` }}>
                                <SelectSection />
                            </div>
                        )))
                        :
                        // 女性で既に登録している場合か初めての場合は初期マネキンを表示
                        (
                            <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${defaultMannequin})` }}>
                                <SelectSection />
                            </div>
                        )
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

const SelectSection = memo(() => {
    return (
        <>
            <SelectWear />
        </>
    )
})