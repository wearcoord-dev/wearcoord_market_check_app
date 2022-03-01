import { useCallback } from "react";
import { useNotLoginUser } from "../provider/NotLoginUserProvider";
import { useMessage } from "./useMessage";

type Props = {
    gender: string;
    mannequin: string;
    caps?: string;
}

export const useRegisterWear = () => {
    const { notLoginUser, setNotLoginUser } = useNotLoginUser();
    const { showMessage } = useMessage();

    console.log(notLoginUser)

    const registerWearLocal = useCallback((props: Props) => {
        const { gender, mannequin, caps } = props;

        let capsId;

        // @ts-ignore:next-line
        if (!caps) {
            capsId = null;
        } else {
            // @ts-ignore:next-line
            capsId = caps.id;
        }

        // @ts-ignore:next-line
        // console.log(gender, mannequin, caps.id)
        // @ts-ignore:next-line
        // setNotLoginUser({ ...notLoginUser, mannequin: mannequin, gender: gender, caps: caps.id }).then(() => {
        //     showMessage({ title: "コーデを保存しました", status: "success" });
        // }
        // ).catch(() => {
        //     showMessage({ title: "コーデの保存に失敗しました", status: "error" });
        // });

        try {
            // 実行される処理
            setNotLoginUser({ ...notLoginUser, mannequin: mannequin, gender: gender, caps: capsId })
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