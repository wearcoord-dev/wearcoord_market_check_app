import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export const useCreateUserFace = () => {
    const history = useHistory();

  const CreateUserFace = (upImg,context) => {

    const header = { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         }}

    const imgUrl = upImg;
    const userId = context.contextName.id;

    const setData = {
        "imgUrl": imgUrl,
        "userId": userId,
    }
    const url = '/api/registerface';

    axios.post(url, setData, header).then((res) => {
        history.go(0);
    }).catch(() => {
    }).finally(() => {
    });
  };

  return { CreateUserFace }
};
