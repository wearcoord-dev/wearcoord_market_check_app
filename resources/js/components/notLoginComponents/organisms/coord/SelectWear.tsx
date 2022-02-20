import { FC, memo } from "react";
import { SearchBox } from "../../molecules/SearchBox";
import { useNotLoginUser } from "../../provider/NotLoginUserProvider";

export const SelectWear: FC = memo(() => {
    const { notLoginUser} = useNotLoginUser();
    console.log(notLoginUser);

    const capsComponent = (
        <>
            <div style={{ width: "15%", height: "50px", margin: "auto" }}></div>
        </>
    )

    const topsComponent = (
        <>
            <div style={{ width: "100%", height: "130px", margin: "auto" }}></div>
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

            <SearchBox />
        </>
    )
});