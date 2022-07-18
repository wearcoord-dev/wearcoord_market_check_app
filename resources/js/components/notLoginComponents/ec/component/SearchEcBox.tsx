import { Drawer } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';
import { CapsEcCategory } from './search/CapsEcCategory';
import { PantsEcCategory } from './search/PantsEcCategory';
import { ShoesEcCategory } from './search/ShoesEcCategory';
import { TopsEcCategory } from './search/TopsEcCategory';

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
    defaultBrand?: string;
};

const style = {
    wrapper: {
        position: 'fixed',
        bottom: '20px',
        width: '100%',
        right: '0',
        flexDirection: 'column',
    },
    ul: {
        flexWrap: 'nowrap',
        overflow: 'auto',
    },
} as const;

export const SearchEcBox: FC<Props> = memo((props) => {
    const {
        onClose,
        isOpen,
        onCloseTops,
        isOpenTops,
        onClosePants,
        isOpenPants,
        onCloseShoes,
        isOpenShoes,
        onClickAllClose,
        defaultGender,
        onClickFetchCaps,
        setCapsSel,
        capsSel,
        onClickFetchTops,
        setTopsSel,
        topsSel,
        onClickFetchPants,
        setPantsSel,
        pantsSel,
        onClickFetchShoes,
        setShoesSel,
        shoesSel,
        defaultBrand,
    } = props;

    return (
        <div style={{ paddingTop: '20px' }}>
            <Drawer onClose={onClose} isOpen={isOpen}>
                <CapsEcCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchCaps={onClickFetchCaps}
                    setCapsSel={setCapsSel}
                    capsSel={capsSel}
                    defaultGender={defaultGender}
                    defaultBrand={defaultBrand}
                />
            </Drawer>
            <Drawer onClose={onCloseTops} isOpen={isOpenTops}>
                <TopsEcCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchTops={onClickFetchTops}
                    setTopsSel={setTopsSel}
                    topsSel={topsSel}
                    defaultGender={defaultGender}
                    defaultBrand={defaultBrand}
                />
            </Drawer>
            <Drawer onClose={onClosePants} isOpen={isOpenPants}>
                <PantsEcCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchPants={onClickFetchPants}
                    setPantsSel={setPantsSel}
                    pantsSel={pantsSel}
                    defaultGender={defaultGender}
                    defaultBrand={defaultBrand}
                />
            </Drawer>
            <Drawer onClose={onCloseShoes} isOpen={isOpenShoes}>
                <ShoesEcCategory
                    onClickAllClose={onClickAllClose}
                    onClickFetchShoes={onClickFetchShoes}
                    setShoesSel={setShoesSel}
                    shoesSel={shoesSel}
                    defaultGender={defaultGender}
                    defaultBrand={defaultBrand}
                />
            </Drawer>
        </div>
    );
});
