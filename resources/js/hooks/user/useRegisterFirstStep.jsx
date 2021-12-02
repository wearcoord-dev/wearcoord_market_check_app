import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useRegisterFirstStep = () => {
    const history = useHistory();

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

        axios.post(url, setData, header).then((res) => {
            history.go(0);
        }).catch(() => {
        }).finally(() => {
        });
    }

    return { RegisterFirstStep }
};
