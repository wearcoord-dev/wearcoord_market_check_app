import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useDeleteCartItem = () => {
    // const [itemRegisterWear, setItemRegisterWear] = useState(null);
    // const [loadingRegisterWear, setLoadingRegisterWear] = useState(false);
    // const [errorRegisterWear, setErrorRegisterWear] = useState(false);
    const history = useHistory();



    const DeleteCartItem = (props) => {

        const id = props.id;
        const type = props.type;
        const user = props.user;

        const header = { headers: {
            'Content-Type': 'application/json;charset=UTF-8',
             }}

        const setData = {
            "type": type,
            "id": id,
            "user": user,
        }
        const url = '/deletecartitem';

        axios.post(url, setData, header).then((res) => {
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