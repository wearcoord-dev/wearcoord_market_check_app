import { Drawer } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";
import { CapsCategory } from "./category/CapsCategory";
import { PantsCategory } from "./category/PantsCategory";
import { ShoesCategory } from "./category/ShoesCategory";
import { TopsCategory } from "./category/TopsCategory";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onCloseTops: () => void;
    isOpenTops: boolean;
    onClosePants: () => void;
    isOpenPants: boolean;
    onCloseShoes: () => void;
    isOpenShoes: boolean;
    onClickAllClose: () => void;
    defaultGender: string;
    onClickRegisterWear: () => void;
    onClickFetchCaps: any;
    setCapsSel: any;
    capsSel: any;
    onClickFetchTops: any;
    setTopsSel: any;
    topsSel: any;
    onClickFetchPants: any;
    setPantsSel: any;
    pantsSel: any;
    onClickFetchShoes: any;
    setShoesSel: any;
    shoesSel: any;
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
    const { onClose, isOpen, onCloseTops, isOpenTops, onClosePants, isOpenPants, onCloseShoes, isOpenShoes, onClickAllClose, defaultGender, onClickRegisterWear, onClickFetchCaps, setCapsSel, capsSel, onClickFetchTops, setTopsSel, topsSel, onClickFetchPants, setPantsSel, pantsSel, onClickFetchShoes, setShoesSel, shoesSel } = props;

    return (
        <>
            <Drawer onClose={onClose} isOpen={isOpen}>
                <CapsCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchCaps={onClickFetchCaps}
                    setCapsSel={setCapsSel}
                    capsSel={capsSel}
                    defaultGender={defaultGender}
                    onClickRegisterWear={onClickRegisterWear}
                />
            </Drawer>
            <Drawer onClose={onCloseTops} isOpen={isOpenTops}>
                <TopsCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchTops={onClickFetchTops}
                    setTopsSel={setTopsSel}
                    topsSel={topsSel}
                    defaultGender={defaultGender}
                    onClickRegisterWear={onClickRegisterWear}
                />
            </Drawer>
            <Drawer onClose={onClosePants} isOpen={isOpenPants}>
                <PantsCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchPants={onClickFetchPants}
                    setPantsSel={setPantsSel}
                    pantsSel={pantsSel}
                    defaultGender={defaultGender}
                    onClickRegisterWear={onClickRegisterWear}
                />
            </Drawer>
            <Drawer onClose={onCloseShoes} isOpen={isOpenShoes}>
                <ShoesCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchShoes={onClickFetchShoes}
                    setShoesSel={setShoesSel}
                    shoesSel={shoesSel}
                    defaultGender={defaultGender}
                    onClickRegisterWear={onClickRegisterWear}
                />
            </Drawer>
        </>
    )
});