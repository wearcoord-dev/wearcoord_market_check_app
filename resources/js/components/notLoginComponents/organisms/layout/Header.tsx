/*eslint-disable react-hooks/exhaustive-deps*/
import { Box, Flex, Heading, Image, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import logoImg from "../../../../../../public/img/logo/wearcoord-main-logo-0-white_03.png";

export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const onClickHome = () => window.location.href = "/";
    const onClickMale = useCallback(() => history.push("/sample/male"), []);
    const onClickFemale = useCallback(() => history.push("/sample/female"), []);
    const onClickCoord = useCallback(() => history.push("/sample"), []);

    return (
        <>
            <Flex
                as="nav"
                bg="#216496"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex w={3 / 12} maxWidth={'200px'} align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    <Image src={logoImg} />
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }} justifyContent={{ md: 'end' }}>
                    <Box pr={{base : 4, md: 8}}>
                        <Link fontWeight={{ md: 'bold' }} fontSize={{ md: '16px' }} onClick={onClickCoord}>コーデを見る</Link>
                    </Box>
                    <Box pr={{ base: 4, md: 8 }}>
                        <Link fontWeight={{ md: 'bold' }} fontSize={{ md: '16px' }} onClick={onClickMale}>男性向けウェア</Link>
                    </Box>
                    <Link fontWeight={{ md: 'bold' }} fontSize={{ md: '16px' }} onClick={onClickFemale}>女性向けウェア</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickHome={onClickHome}
                onClickMale={onClickMale}
                onClickFemale={onClickFemale}
                onClickCoord={onClickCoord}
            />
        </>
    )
});