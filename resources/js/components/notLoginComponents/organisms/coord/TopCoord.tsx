import { Button, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DeleteModal } from "../../atoms/modal/modal";
import { useMessage } from "../../hooks/useMessage";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import { NotLoginUser } from "../../types/NotLoginUser";
import { CapsComponent } from "../wearSect/topCoord/CapsComponent";
import { PantsComponent } from "../wearSect/topCoord/PantsComponent";
import { ShoesComponent } from "../wearSect/topCoord/ShoesComponent";
import { TopsComponent } from "../wearSect/topCoord/TopsComponent";

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
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
    }
} as const;

export const TopCoord: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();
    const [defaultGender, setDefaultGender] = useState<string>();
    const [capsId, setCapsId] = useState<string>();
    const [topsId, setTopsId] = useState<string>();
    const [pantsId, setPantsId] = useState<string>();
    const [shoesId, setShoesId] = useState<string>();
    const history = useHistory();

    console.log(notLoginUser);

    useEffect(() => {
        if (notLoginUser) {
            setDefaultGender(notLoginUser.gender);
            setCapsId(notLoginUser.caps);
            setTopsId(notLoginUser.tops);
            setPantsId(notLoginUser.pants);
            setShoesId(notLoginUser.shoes);
        }
    }, [notLoginUser])

    // const onClickToMannequin = (gender) => {
    //     history.push({
    //         pathname: '/sample/mannequin',
    //         state: { from: gender }
    //     });
    // }

    const onClickCreateCoord = (gender) => {
        if (defaultGender == 'male' || gender == 'male') {
            history.push({
                pathname: '/sample/male',
                // state: { from: gender }
            });
        }
        if (defaultGender == 'female' || gender == 'female') {
            history.push({
                pathname: '/sample/female',
                // state: { from: gender }
            });
        }
    }

    const onClickChangeMannequin = useCallback(() => history.push("/sample/mannequin"), []);

    const onClickResetMannequin = () => {
        localStorage.clear();
        showMessage({ title: "コーデを削除しました", status: "success" });
        history.go(0);
    };


    const capsComponent = (
        <CapsComponent
            defaultGender={defaultGender}
            itemId={capsId}
        />
    )

    const topsComponent = (
        <TopsComponent
            defaultGender={defaultGender}
            itemId={topsId}
        />
    )

    const pantsComponent = (
        <PantsComponent
            defaultGender={defaultGender}
            itemId={pantsId}
        />
    )

    const shoesComponent = (
        <ShoesComponent
            defaultGender={defaultGender}
            itemId={shoesId}
        />
    )


    return (
        <div style={style.wrapper}>
            {notLoginUser ? (notLoginUser.mannequin ? (
                <div onClick={onClickCreateCoord}>
                    <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                        <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} alt="" /></div>

                        <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

                        <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


                        <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

                        <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>
                    </div>
                </div>
            ) : (
                <Stack>
                    <Flex justifyContent='center' py={10}>マネキンを選ぶかコーデを作りましょう!</Flex>
                </Stack>
            )
            ) : null}

            {/* genderが選ばれていない時のマネキンリンクボタン */}
            {/* {notLoginUser ? (notLoginUser.gender === null ? (
                <Stack direction='row' spacing={4} align='center' justifyContent='center'>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickToMannequin('male')}>
                        男性マネキンを選ぶ
                    </Button>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickToMannequin('female')}>
                        女性マネキンを選ぶ
                    </Button>
                </Stack>
            ) : null) : null} */}

            {notLoginUser ? (notLoginUser.gender === null ? (
                <Stack direction='row' spacing={4} align='center' justifyContent='center'>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickCreateCoord('male')}>
                        男性ウェアを選ぶ
                    </Button>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickCreateCoord('female')}>
                        女性ウェアを選ぶ
                    </Button>
                </Stack>
            ) : null) : null}

            {notLoginUser ? (notLoginUser.gender ? (
                <Stack direction='column' spacing={4} align='center' justifyContent='center'>
                    <Button onClick={onClickChangeMannequin} background='#216496' color='white' variant='solid'>
                        マネキンを変更する
                    </Button>
                    <Button onClick={onClickCreateCoord} background='#216496' color='white' variant='solid'>
                        コーデをつくる
                    </Button>
                    <DeleteModal onClickResetMannequin={onClickResetMannequin}>コーデをリセットする</DeleteModal>
                </Stack>
            ) : null) : null}
        </div>
    )
});

