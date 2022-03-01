import { useCallback } from "react";

type Props = {
    gender: string;
    mannequin: string;
    caps: string;
}

export const useRegisterWear = () => {

    const registerWearLocal = useCallback((props: Props) => {
        const { gender, mannequin, caps } = props;

        console.log(gender, mannequin, caps)

    },[])
        return { registerWearLocal };
}