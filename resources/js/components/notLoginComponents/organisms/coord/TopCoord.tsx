import { Button, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";

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
    const history = useHistory();
    console.log(notLoginUser);

    const onClickToMannequin = (gender) => {
        history.push({
            pathname: '/sample/mannequin',
            state: { from: gender }
        });
    }

    return (
        <>
            {notLoginUser ? (
                <div style={style.bgImg}>
                    <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                    </div>
                </div>
            ) :
                (
                    <p>コーデを作ってください</p>
                )}

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
        </>
    )
});

