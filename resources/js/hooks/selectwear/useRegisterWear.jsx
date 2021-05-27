import axios from "axios";
import { useHistory } from "react-router";

export const useRegisterWear = () => {
    const history = useHistory();


    const RegisterWear = (props) => {
        console.log('OK');
        // console.log(props);
        // console.log(props.caps.id);
        const caps = props.caps.id;
        const tops = props.tops.id;
        const pants = props.pants.id;
        const shoes = props.shoes.id;
        const userid = props.userid.id;
        // console.log(userid.id);

        axios.get("/api/registerwear", {
            params: {
                caps: caps,
                tops: tops,
                pants: pants,
                shoes: shoes,
                userid: userid,
              }
        }).then((res) => {
            console.log(res);
            history.push("/main/mycoord");
          }).catch(() => {
          }).finally(() => {
          });
    }

    return {RegisterWear}
}