import axios from "axios";
import { useState } from "react";

export const useGetUserInfo = () => {

  const [userInfo, setUserInfo] = useState([]);

  const getUser = () => {

    axios.get("/user").then((res) => {
        // console.log(res);

        setUserInfo(res);
    })
  };

  return { getUser, userInfo }
};
