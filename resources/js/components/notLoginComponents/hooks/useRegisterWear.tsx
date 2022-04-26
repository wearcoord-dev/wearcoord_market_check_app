// @ts-nocheck

import axios from "axios";
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

    // console.log(notLoginUser)

    const registerWearLocal = useCallback((props: Props) => {
        const { gender, mannequin, caps, tops, pants, shoes } = props;

        let capsId;
        let topsId;
        let pantsId;
        let shoesId;

        if (gender == notLoginUser.gender) {

            // 既に登録済みの場合
            if (caps) {
                if (caps.id) {
                    capsId = caps.id;
                } else if (caps == 'remove') {
                    // 脱ぐ
                    capsId = null;
                } else {
                    // 既存のまま
                    capsId = caps;
                }
            } else {
                capsId = notLoginUser.caps;
            }
            if (tops) {
                if (tops.id) {
                    topsId = tops.id;
                } else {
                    topsId = tops;
                }
            } else {
                topsId = notLoginUser.tops;
            }
            if (pants) {
                if (pants.id) {
                    pantsId = pants.id;
                } else {
                    pantsId = pants;
                }
            } else {
                pantsId = notLoginUser.pants;
            }
            if (shoes) {
                if (shoes.id) {
                    shoesId = shoes.id;
                } else {
                    shoesId = shoes;
                }
            } else {
                shoesId = notLoginUser.shoes;
            }

        } else {

            // 新規作成の場合
            if (caps) {
                if (caps.id) {
                    capsId = caps.id;
                } else {
                    capsId = caps;
                }
            } else {
                capsId = null;
            }
            if (tops) {
                if (tops.id) {
                    topsId = tops.id;
                } else {
                    topsId = tops;
                }
            } else {
                topsId = null;
            }
            if (pants) {
                if (pants.id) {
                    pantsId = pants.id;
                } else {
                    pantsId = pants;
                }
            } else {
                pantsId = null;
            }
            if (shoes) {
                if (shoes.id) {
                    shoesId = shoes.id;
                } else {
                    shoesId = shoes;
                }
            } else {
                shoesId = null;
            }
        }

        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }

        const url = '/api/countitems';

        const setData = {
            "caps": capsId,
            "tops": topsId,
            "pants": pantsId,
            "shoes": shoesId
        }

        try {
            // 実行される処理
            setNotLoginUser({ ...notLoginUser, mannequin: mannequin, gender: gender, caps: capsId, tops: topsId, pants: pantsId, shoes: shoesId })
            // axios.post(url, setData, header);
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