import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export const useCreateUserFace = () => {
    const history = useHistory();

  const CreateUserFace = (upImg,context) => {

    // console.log(props.target.form[1].value);
    // console.log(context.contextName.id);

    console.log('送ってます〜');
    // console.log(upImg);
    // console.log(context.contextName.id);

    const header = { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
         }}

    const imgUrl = upImg;
    const userId = context.contextName.id;

    const setData = {
        "imgUrl": imgUrl,
        "userId": userId,
    }
    const url = '/api/registerface';

    axios.post(url, setData, header).then((res) => {
        console.log(res);
        history.go(0);
    }).catch(() => {
    }).finally(() => {
    });
  };

  return { CreateUserFace }
};
