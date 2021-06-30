import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useDeleteCartItem = () => {
    // const [itemRegisterWear, setItemRegisterWear] = useState(null);
    // const [loadingRegisterWear, setLoadingRegisterWear] = useState(false);
    // const [errorRegisterWear, setErrorRegisterWear] = useState(false);
    const history = useHistory();



    const DeleteCartItem = (props) => {
        // setLoadingRegisterWear(true);
        // setErrorRegisterWear(false);
        console.log(props);

        const id = props.id;
        const type = props.type;
        const user = props.user;

        const header = { headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
             }}

        const setData = {
            "type": type,
            "id": id,
            "user": user,
        }
        const url = '/api/deletecartitem';

        axios.post(url, setData, header).then((res) => {
            console.log(res);
            // setItemRegisterWear(res.data);
            history.go(0);
          }).catch(() => {
            // setErrorRegisterWear(true);
          }).finally(() => {
            // setLoadingRegisterWear(false);
          });
    }
    return { DeleteCartItem }

}