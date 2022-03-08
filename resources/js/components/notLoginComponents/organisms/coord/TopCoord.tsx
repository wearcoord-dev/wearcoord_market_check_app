// @ts-nocheck

import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Icon } from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import { DeleteModal } from "../../atoms/modal/modal";
import { useMessage } from "../../hooks/useMessage";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";
import { NotLoginUser } from "../../types/NotLoginUser";
import { CapsComponent } from "../wearSect/topCoord/CapsComponent";
import { PantsComponent } from "../wearSect/topCoord/PantsComponent";
import { ShoesComponent } from "../wearSect/topCoord/ShoesComponent";
import { TopsComponent } from "../wearSect/topCoord/TopsComponent";
import { FaTshirt } from 'react-icons/fa';
import { BiFace } from 'react-icons/bi';
import { GiArmoredPants } from 'react-icons/gi';
import { GiSonicShoes } from 'react-icons/gi';
import { TopDrawerBtn } from "../../atoms/drawer/TopDrawerBtn";

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
        // display: "flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
        // height: "100%",
        // flexDirection: "column",
    }
} as const;

const colorList = [
    'all',
    'black',
    'white',
    'navy',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
];

export const TopCoord: FC = memo(() => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();
    const [defaultGender, setDefaultGender] = useState<string>();
    const [capsId, setCapsId] = useState<string>();
    const [topsId, setTopsId] = useState<string>();
    const [pantsId, setPantsId] = useState<string>();
    const [shoesId, setShoesId] = useState<string>();
    const history = useHistory();

    const [defaultCategoryCaps, setDefaultCategoryCaps] = useState();
    const [defaultUrlCaps, setDefaultUrlCaps] = useState();
    const [defaultCategoryTops, setDefaultCategoryTops] = useState();
    const [defaultUrlTops, setDefaultUrlTops] = useState();
    const [defaultCategoryPants, setDefaultCategoryPants] = useState();
    const [defaultUrlPants, setDefaultUrlPants] = useState();
    const [defaultCategoryShoes, setDefaultCategoryShoes] = useState();
    const [defaultUrlShoes, setDefaultUrlShoes] = useState();

    const [getCoordData, setGetCoordData] = useState();


    console.log(notLoginUser);
    console.log(getCoordData)

    useEffect(() => {
        if (notLoginUser) {
            setDefaultGender(notLoginUser.gender);
            setCapsId(notLoginUser.caps);
            setTopsId(notLoginUser.tops);
            setPantsId(notLoginUser.pants);
            setShoesId(notLoginUser.shoes);
        }
    }, [notLoginUser])

    useEffect(() => {
        if (notLoginUser) {
            if (topsId ?? pantsId ?? shoesId) {
                axios.get("/api/getcoord", {
                    params: {
                        capsId: capsId,
                        topsId: topsId,
                        pantsId: pantsId,
                        shoesId: shoesId,
                    }
                }).then((res) => {
                    // console.log(res.data)
                    setGetCoordData(res.data);
                }).catch(() => {
                }).finally(() => {
                });
            }
        }
    }, [capsId, topsId, pantsId, shoesId]);

    useEffect(() => {
        if (getCoordData){
            if (getCoordData.capsItem){
                setDefaultCategoryCaps(getCoordData.capsItem.category)
                colorList.map((color) => {
                    if (getCoordData.capsItem[color] !== null)
                        setDefaultUrlCaps(getCoordData.capsItem[color]);
                })
            }
            setDefaultCategoryTops(getCoordData.topsItem.category);
            colorList.map((color) => {
                if (getCoordData.topsItem[color] !== null)
                    setDefaultUrlTops(getCoordData.topsItem[color]);
            })
            setDefaultCategoryPants(getCoordData.pantsItem.category);
            colorList.map((color) => {
                if (getCoordData.pantsItem[color] !== null)
                    setDefaultUrlPants(getCoordData.pantsItem[color]);
            })
            setDefaultCategoryShoes(getCoordData.shoesItem.category);
            colorList.map((color) => {
                if (getCoordData.shoesItem[color] !== null)
                    setDefaultUrlShoes(getCoordData.shoesItem[color]);
            })
        }
    }, [getCoordData])

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
            defaultCategory={defaultCategoryCaps}
            defaultUrl={defaultUrlCaps}
        />
    )

    const topsComponent = (
        <TopsComponent
            defaultGender={defaultGender}
            itemId={topsId}
            defaultCategory={defaultCategoryTops}
            defaultUrl={defaultUrlTops}
        />
    )

    const pantsComponent = (
        <PantsComponent
            defaultGender={defaultGender}
            itemId={pantsId}
            defaultCategory={defaultCategoryPants}
            defaultUrl={defaultUrlPants}
        />
    )

    const shoesComponent = (
        <ShoesComponent
            defaultGender={defaultGender}
            itemId={shoesId}
            defaultCategory={defaultCategoryShoes}
            defaultUrl={defaultUrlShoes}
        />
    )



    return (
        <div style={style.wrapper}>
            {notLoginUser ? (notLoginUser.mannequin ? (
                <div>
                    <div onClick={onClickCreateCoord} style={{ ...style.mannequinImg, backgroundImage: `url(../../../../../../img/mannequin/${notLoginUser.mannequin})` }}>
                        <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} alt="" /></div>

                        <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

                        <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


                        <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

                        <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>
                    </div>

                    <Stack direction='column' spacing={4} align='center' justifyContent='center'>
                        <Button onClick={onClickChangeMannequin} background='#216496' color='white' variant='solid'>
                            マネキンを変更する
                        </Button>
                        <Button onClick={onClickCreateCoord} background='#216496' color='white' variant='solid'>
                            コーデをつくる
                        </Button>
                        <DeleteModal onClickResetMannequin={onClickResetMannequin}>コーデをリセットする</DeleteModal>
                    </Stack>

                    <Flex flexDirection={'column'} display={'flex'} position={'absolute'} right={0} top={'100px'} height={'50vh'} justifyContent={'space-evenly'}>
                        <TopDrawerBtn
                            btnIcon={BiFace}
                            wearId={capsId}
                            type={'caps'}
                        />
                        <TopDrawerBtn
                            btnIcon={FaTshirt}
                            wearId={topsId}
                            type={'tops'}
                        />
                        <TopDrawerBtn
                            btnIcon={GiArmoredPants}
                            wearId={pantsId}
                            type={'pants'}
                        />
                        <TopDrawerBtn
                            btnIcon={GiSonicShoes}
                            wearId={shoesId}
                            type={'shoes'}
                        />
                    </Flex>
                </div>
            ) : (
                <Stack>
                    <Flex justifyContent='center' py={10}>コーデを作りましょう!</Flex>
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

        </div>
    )
});

