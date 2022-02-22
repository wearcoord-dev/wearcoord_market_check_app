import { Button, Flex, Stack } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { DeleteModal } from "../../atoms/modal/modal";
import { useMessage } from "../../hooks/useMessage";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import { NotLoginUser } from "../../types/NotLoginUser";

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

export const TopCoord: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();
    const history = useHistory();
    console.log(notLoginUser);

    const onClickToMannequin = (gender) => {
        history.push({
            pathname: '/sample/mannequin',
            state: { from: gender }
        });
    }

    const onClickChangeMannequin = useCallback(() => history.push("/sample/mannequin"), []);

    const onClickResetMannequin = () => {
        localStorage.clear();
        showMessage({ title: "コーデを削除しました", status: "success" });
        history.go(0);
    };


    return (
        <>

            {notLoginUser ? (notLoginUser.mannequin ? (
                <div style={style.bgImg}>
                    <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                    </div>
                </div>
            ) : (
                <Stack>
                    <Flex justifyContent='center' py={10}>マネキンを選ぶかコーデを作りましょう!</Flex>
                </Stack>
            )
            ) : null}

            {/* genderが選ばれていない時のマネキンリンクボタン */}
            {notLoginUser ? (notLoginUser.gender === null ? (
                <Stack direction='row' spacing={4} align='center' justifyContent='center'>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickToMannequin('male')}>
                        男性マネキンを選ぶ
                    </Button>
                    <Button bg='#216496' color='white' variant='solid' onClick={() => onClickToMannequin('female')}>
                        女性マネキンを選ぶ
                    </Button>
                </Stack>
            ) : null) : null}

            {notLoginUser ? (notLoginUser.gender ? (
                <Stack direction='row' spacing={4} align='center' justifyContent='center'>
                    <Button onClick={onClickChangeMannequin} background='#216496' color='white' variant='solid'>
                        マネキンを変更する
                    </Button>
                    <DeleteModal onClickResetMannequin={onClickResetMannequin}>コーデをリセットする</DeleteModal>
                </Stack>
            ) : null) : null}

            {/* {notLoginUser ? (notLoginUser.gender === 'male' ? (
                <>
                </>
            ) : notLoginUser.gender === 'female' ? (
                <>
                </>
            ) : null) : null} */}
        </>
    )
});

