import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

export const usePostItemToCart = () => {
    const history = useHistory();

  const PostItemToCart = (type, item, user) => {

    // console.log(props.target.form[1].value);
    // console.log(context.contextName.id);

    const header = { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
         }}

    const userId = user.id;

    const setData = {
        "type": type,
        "item": item,
        "userId": userId,
    }
    const url = '/api/addcart';

    axios.post(url, setData, header).then((res) => {
        console.log(res);
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
