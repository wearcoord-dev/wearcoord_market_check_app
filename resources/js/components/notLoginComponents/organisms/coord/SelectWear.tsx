import { useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";

export const SelectWear: FC = memo(() => {
    const { notLoginUser } = useNotLoginUser();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        isOpen: isOpenTops,
        onOpen: onOpenTops,
        onClose: onCloseTops
    } = useDisclosure()

    // console.log(notLoginUser);

    // 選択したカテゴリー以外を閉じる
    const onClickCaps = useCallback(() => {
        onOpen();
        onCloseTops();
    }, []);

    const onClickTops = useCallback(() => {
        onOpenTops();
        onClose();
    }, []);

    const onClickAllClose = useCallback(() => {
        onClose();
        onCloseTops();
    }, []);

    const capsComponent = (
        <>
            <div onClick={onClickCaps} style={{ width: "15%", height: "50px", margin: "auto" }}></div>
        </>
    )

    const topsComponent = (
        <>
            <div onClick={onClickTops} style={{ width: "100%", height: "130px", margin: "auto" }}></div>
        </>
    )

    const pantsComponent = (
        <>
            <div style={{ width: "100%", height: "170px", margin: "auto" }}></div>
        </>
    )

    const shoesComponent = (
        <>
            <div style={{ width: "100%", height: "100px", margin: "auto" }}></div>
        </>
    )

    return (
        <>
            <div data-html2canvas-ignore="true" style={{ width: "40px", position: "absolute", left: "50%", transform: "translateX(-50%)", top: "24px" }}><img style={{ width: "100%", borderRadius: "50%" }} alt="" /></div>

            <div style={{ display: "flex", position: "relative" }}>{capsComponent}</div>

            <div style={{ display: "flex", height: "115px", marginTop: "16px" }}>{topsComponent}</div>


            <div style={{ display: "flex", height: "140px" }}>{pantsComponent}</div>

            <div style={{ display: "flex", overflowX: "scroll", marginTop: "-10px" }}>{shoesComponent}</div>

            <SearchBox
                onClose={onClose}
                isOpen={isOpen}
                onCloseTops={onCloseTops}
                isOpenTops={isOpenTops}
                onClickAllClose={onClickAllClose}
            />
        </>
    )
});