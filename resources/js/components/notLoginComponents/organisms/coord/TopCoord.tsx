import { FC, memo } from "react";

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
        backgroundImage: "url(../../../../../../img/mannequin/mens_170_model.png)",
    }
}as const;

export const TopCoord: FC = memo(() => {
    return (
        <>
            <div style={style.bgImg}>
                <div style={style.mannequinImg}>
                </div>
            </div>
        </>
    )
});

