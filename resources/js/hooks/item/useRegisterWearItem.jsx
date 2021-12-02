import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useRegisterWearItem = () => {
    const [itemRegisterWear, setItemRegisterWear] = useState(null);
    const [loadingRegisterWear, setLoadingRegisterWear] = useState(false);
    const [errorRegisterWear, setErrorRegisterWear] = useState(false);
    const history = useHistory();



    const RegisterWearItem = (props) => {
        setLoadingRegisterWear(true);
        setErrorRegisterWear(false);


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
        const url = '/api/registerwearitem';

        axios.post(url, setData, header).then((res) => {
            // setItemRegisterWear(res.data);
            history.push("/main/mycoord");
          }).catch(() => {
            setErrorRegisterWear(true);
          }).finally(() => {
            setLoadingRegisterWear(false);
          });
    }
    return { RegisterWearItem, itemRegisterWear, loadingRegisterWear, errorRegisterWear }

}