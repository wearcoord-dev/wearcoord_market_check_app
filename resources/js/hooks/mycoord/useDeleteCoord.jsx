import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useDeleteCoord = () => {
    const history = useHistory();



    const DeleteCoord = (props) => {

        const id = props.id;

        const header = { headers: {
            'Content-Type': 'application/json;charset=UTF-8',
             }}

        const setData = {
            "id": id,
        }
        const url = '/deletecoord';

        axios.post(url, setData, header).then((res) => {
            history.push("/main/favorite");
          }).catch(() => {
          }).finally(() => {
          });
    }
    return { DeleteCoord }

}