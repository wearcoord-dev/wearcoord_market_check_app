import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useCopyCoord = () => {
    const history = useHistory();



    const CopyCoord = (props) => {
        console.log(props);

        const id = props.id;
        const userid = props.userid;
        const capsID = props.caps;
        const topsID = props.tops;
        const pantsID = props.pants;
        const shoesID = props.shoes;
        const mannequin = props.mannequin;

        const header = { headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
             }}

        const setData = {
            'id': id,
            'userid': userid,
            'caps': capsID,
            'tops': topsID,
            'pants': pantsID,
            'shoes': shoesID,
            'mannequin': mannequin,
        }
        const url = '/api/copycoord';

        axios.post(url, setData, header).then((res) => {
            console.log(res);
            history.push("/main/mycoord");
          }).catch(() => {
          }).finally(() => {
          });
    }
    return { CopyCoord }

}