import axios from "axios";
import { useState } from "react";

export const useRegisterFirstStep = () => {

    const RegisterFirstStep = (id) => {
        const header = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }

        const setData = {
            "id": id,
        }
        const url = '/api/registerfirstcheck';

        console.log('OK');
        console.log(id);

        axios.post(url, setData, header).then((res) => {
            console.log(res);
        }).catch(() => {
        }).finally(() => {
        });
    }

    return { RegisterFirstStep }
};
