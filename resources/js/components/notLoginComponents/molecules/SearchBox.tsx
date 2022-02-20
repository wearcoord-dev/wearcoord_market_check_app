import { Drawer } from "@chakra-ui/react";
import { FC, memo } from "react";
import { CapsCategory } from "./category/CapsCategory";
import { TopsCategory } from "./category/TopsCategory";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onCloseTops: () => void;
    isOpenTops: boolean;
    onClickAllClose: () => void;
}

const style = {
    wrapper: {
        position: "fixed",
        bottom: "20px",
        width: "100%",
        right: "0",
        flexDirection: 'column',
    },
    ul: {
        flexWrap: "nowrap",
        overflow: "auto",
    }
} as const;

export const SearchBox: FC<Props> = memo((props) => {
    const { onClose, isOpen, onCloseTops, isOpenTops, onClickAllClose } = props;

    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen}>
                <CapsCategory onClickAllClose={onClickAllClose} />
            </Drawer>
            <Drawer onClose={onCloseTops} isOpen={isOpenTops}>
                <TopsCategory onClickAllClose={onClickAllClose} />
            </Drawer>
        </>
    )
});