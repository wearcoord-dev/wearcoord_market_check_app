import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export const useRegisterBDCoord = () => {
    const history = useHistory();

  const RegisterCoord = (props,context) => {

    // console.log(props.target.form[1].value);
    // console.log(context.contextName.id);

    const header = { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         }}

    const imgUrl = props.target.form[0].value
    const userId = context.contextName.id;

    const setData = {
        "imgUrl": imgUrl,
        "userId": userId,
    }
    const url = '/api/bestdresser/registerBDCoord';

    axios.post(url, setData, header).then((res) => {
        console.log(res);
        history.go(0);
    }).catch(() => {
    }).finally(() => {
    });
  };

  return { RegisterCoord }
};
