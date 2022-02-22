import { Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, memo, useCallback, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useMessage } from "../hooks/useMessage";
import { InnerSearchBox } from "../molecules/InnerSearchBox";
import { SelectWear } from "../organisms/coord/SelectWear";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";

const style = {
    bgImg: {
    },
    mannequinImg: {
        height: "50vh",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        maxWidth: "400px",
        margin: "auto",
        position: "relative",
        width: '50%',
    }
} as const;

const commonCss = {
    '&::-webkit-scrollbar': {
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#216496',
        borderRadius: '24px',
    },
}

export const ChangeMannequin: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const [mannequinValue, setMannequinValue] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { showMessage } = useMessage();
    console.log(notLoginUser);


    // context保持している場合のアクセスはlocationを使わないのでここで確認
    let fromWhere = null;

    if (location.state) {
        {/* @ts-ignore */ }
        fromWhere = location.state.from;
    }


    const handleSubmit = (props) => {
        if (!mannequinValue){
            showMessage({ title: "一つ選んでください", status: "error" });
            return;
        }
        // e.preventDefault();
        // console.log(mannequinValue)
        setNotLoginUser({ ...notLoginUser, gender: props, mannequin: mannequinValue });
        showMessage({ title: "変更しました", status: "success" });
        // // 前のページに戻れないようにする
        history.replace('/sample');
    };

    // ダイレクトにマネキン変更URLに飛んできた場合トップに戻す
    if (!location.state && notLoginUser) {
        if (notLoginUser.gender === null) {
            history.replace('/sample');
        }
    }

    return (
        <>
            {/* 現在のマネキンを表示 */}
            {notLoginUser ? (notLoginUser.mannequin ? (
                <div style={style.bgImg}>
                    <div style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                    </div>
                </div>
            ) : (
                <Stack justifyContent='center' alignItems='center' height='50vh'>
                    <Flex>現在何も選ばれていません</Flex>
                </Stack>
            )
            ) : null}

            {notLoginUser ? (notLoginUser.gender === 'male' ? (
                <CreateTabs setMannequinValue={setMannequinValue} handleSubmit={handleSubmit} gender='male' />
            ) : notLoginUser.gender === 'female' ? (
                <CreateTabs setMannequinValue={setMannequinValue} handleSubmit={handleSubmit} gender='female' />
            )
                : null
            ) : null}

            {fromWhere ? (fromWhere === 'male' ? (
                <CreateTabs setMannequinValue={setMannequinValue} handleSubmit={handleSubmit} gender='male' />
            ) : fromWhere === 'female' ? (
                <CreateTabs setMannequinValue={setMannequinValue} handleSubmit={handleSubmit} gender='female' />
            )
                : null
            ) : null}

            {/* {fromWhere ? fromWhere ?? <p>okkkk</p> : null} */}

        </>
    )
});

function SubmitBtn(props) {
    const { children, EnterSubmit } = props;
    return (
        <Stack direction='row' spacing={4} align='center' justifyContent='center' py={4}>
            <Button type="button" bg='#216496' variant='solid' color='white' onClick={EnterSubmit}>
                {children}
            </Button>
        </Stack>
    )
}

function CreateTabs(props) {
    const { setMannequinValue, handleSubmit, gender } = props;

    const types = ['inner', 'socks'];

    return (
        <Tabs position='fixed' bottom={0} width='100%' isFitted variant='enclosed'>
            <TabList mb='1em'>
                <Tab>インナー</Tab>
                <Tab>ソックス</Tab>
            </TabList>
            <TabPanels>
                {types.map((value) => {
                    return (
                        <TabPanel key={value}>
                            <Flex as='ul' overflow='auto'
                                css={commonCss}
                            >
                                <InnerSearchBox setMannequinValue={setMannequinValue} gender={gender} type={value} />
                            </Flex>
                            <SubmitBtn EnterSubmit={() => handleSubmit(gender)}>マネキンを確定する</SubmitBtn>
                        </TabPanel>
                    )
                })}
            </TabPanels>
        </Tabs>
    )
}