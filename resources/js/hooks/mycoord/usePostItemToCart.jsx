import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export const usePostItemToCart = () => {
    const history = useHistory();

  const PostItemToCart = (type, item, user) => {

    const header = { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         }}

    const userId = user.id;

    const setData = {
        "type": type,
        "item": item,
        "userId": userId,
    }
    const url = '/addcart';

    axios.post(url, setData, header).then((res) => {
        if(res.data==1){
            alert('登録しました');
        };
        if(res.data==0){
            alert('既に登録しています');
        };
        history.go(0);
    }).catch(() => {
    }).finally(() => {
    });
  };

  return { PostItemToCart }
};
