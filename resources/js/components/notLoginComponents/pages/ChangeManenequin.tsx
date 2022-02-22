import { Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, memo, useCallback, useState } from "react";
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
        backgroundImage: "url(../../../../../../img/mannequin/mens_170_model.png)",
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
    console.log(notLoginUser);

    // if(!notLoginUser){
    //     setNotLoginUser({gender : 'male', caps : null, tops : null, pants : null, shoes : null});
    // }

    const handleSubmit = () => {
        // e.preventDefault();
        console.log(mannequinValue)
        const genderType = 'male';
        setNotLoginUser({ ...notLoginUser, gender: genderType, mannequin: mannequinValue });
    };

    return (
        <>
            <div style={style.bgImg}>
                <div style={style.mannequinImg}>
                </div>
            </div>

            <Tabs position='fixed' bottom={0} width='100%' isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>インナー</Tab>
                    <Tab>ソックス</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex as='ul' overflow='auto'
                            css={commonCss}
                        >
                            <InnerSearchBox setMannequinValue={setMannequinValue} gender={'male'} type='inner' />
                        </Flex>
                        <SubmitBtn EnterSubmit={handleSubmit}>マネキンを確定する</SubmitBtn>
                    </TabPanel>
                    <TabPanel>
                        <Flex as='ul' overflow='auto'
                            css={commonCss}
                        >
                            <InnerSearchBox setMannequinValue={setMannequinValue} gender={'male'} type='socks' />
                        </Flex>
                        <SubmitBtn EnterSubmit={handleSubmit}>マネキンを確定する</SubmitBtn>
                    </TabPanel>
                </TabPanels>
            </Tabs>
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