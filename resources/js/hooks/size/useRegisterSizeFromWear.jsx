import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useRegisterSizeFromWear = () => {
    const history = useHistory();

    const RegisterSizeFromWear = (props, user, type) => {
        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }

        console.log(props)

        const setData = {
            props: props,
            id: user.id,
            type: type,
        }
        const url = '/api/registersize/wear';

        // console.log('OK');

        axios.post(url, setData, header).then((res) => {
            console.log(res);
            // history.go(0);
        }).catch(() => {
        }).finally(() => {
        });
    }

    return { RegisterSizeFromWear }
};
