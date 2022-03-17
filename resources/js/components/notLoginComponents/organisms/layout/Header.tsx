/*eslint-disable react-hooks/exhaustive-deps*/
import { Box, Flex, Heading, Image, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import  logoImg  from "../../../../../../public/img/logo/wearcoord-main-logo-0-white_03.png";

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
                <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                    {/* <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>wearcoord</Heading> */}
                    <Image w={3/12} src={logoImg} />
                </Flex>
                <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                    <Box pr={4}>
                        <Link onClick={onClickCoord}>コーデを見る</Link>
                    </Box>
                    <Box pr={4}>
                        <Link onClick={onClickMale}>男性向けウェア</Link>
                    </Box>
                    <Link onClick={onClickFemale}>女性向けウェア</Link>
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