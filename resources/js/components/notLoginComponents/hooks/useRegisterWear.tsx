import { useCallback } from "react";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";
import { useMessage } from "./useMessage";

type Props = {
    gender: string;
    mannequin: string;
    caps?: string;
    tops?: string;
    pants?: string;
    shoes?: string;
}

export const useRegisterWear = () => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();

    console.log(notLoginUser)

    const registerWearLocal = useCallback((props: Props) => {
        const { gender, mannequin, caps, tops, pants, shoes } = props;

        let capsId;
        let topsId;
        let pantsId;
        let shoesId;

        // @ts-ignore:next-line
        if (!caps) {
            capsId = null;
        } else {
            // @ts-ignore:next-line
            capsId = caps.id;
        }
        // @ts-ignore:next-line
        if (!tops) {
            topsId = null;
        } else {
            // @ts-ignore:next-line
            topsId = tops.id;
        }
        // @ts-ignore:next-line
        if (!pants) {
            pantsId = null;
        } else {
            // @ts-ignore:next-line
            pantsId = pants.id;
        }
        // @ts-ignore:next-line
        if (!shoes) {
            shoesId = null;
        } else {
            // @ts-ignore:next-line
            shoesId = shoes.id;
        }

        try {
            // 実行される処理
            setNotLoginUser({ ...notLoginUser, mannequin: mannequin, gender: gender, caps: capsId, tops: topsId, pants: pantsId, shoes: shoesId })
            showMessage({ title: "コーデを保存しました", status: "success" });
        } catch (error) {
            // 例外が発生した場合に実行される処理
            showMessage({ title: "コーデの保存に失敗しました", status: "error" });
        } finally {
            // 必ず実行される処理
        }

    }, [])
    return { registerWearLocal };
}