import { Button, Flex, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, memo } from "react";
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
    console.log(notLoginUser);

    // if(!notLoginUser){
    //     setNotLoginUser({gender : 'male', caps : null, tops : null, pants : null, shoes : null});
    // }

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
                            <InnerSearchBox gender={'male'} type='inner' />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex as='ul' overflow='auto'
                            css={commonCss}
                        >
                            <InnerSearchBox gender={'male'} type='socks' />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            <Stack direction='row' spacing={4} align='center' justifyContent='center' pb={4}>
                <Button bg='#216496' variant='solid' color='white'>
                    マネキンを確定する
                </Button>
            </Stack>
            </Tabs>
        </>
    )
});